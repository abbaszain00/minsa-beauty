export interface Service {
  category: string;
  subcategory: string;
  name: string;
  price: number;
  description?: string;
  featured: boolean;
}

const SHEET_ID = '1IDxhtR-MHskNljjGimSElfxe_NYEqjgFm9Fqubbx1pA';
const GID = '1449584094'; // From your URL

// Use the CSV export URL for public sheets
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;

// Proper CSV parser that handles quotes correctly
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Escaped quote
        current += '"';
        i++; // Skip next quote
      } else {
        // Toggle quote state
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      // End of field
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  // Add last field
  result.push(current.trim());
  
  return result;
}

export async function getServicesFromSheet(): Promise<Service[]> {
  try {
    const response = await fetch(SHEET_CSV_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch services from Google Sheets');
    }

    const csvText = await response.text();
    const lines = csvText.split('\n');
    
    // Skip header row and filter empty lines
    const dataLines = lines.slice(1).filter((line) => line.trim());

    const services: Service[] = dataLines.map((line) => {
      const columns = parseCSVLine(line);
      
      // Clean up the values
      const category = columns[0] || '';
      const subcategory = columns[1] || '';
      const name = columns[2] || '';
      const priceStr = columns[3] || '0';
      const description = columns[4] || '';
      const featuredStr = columns[5] || 'FALSE';
      
      // Parse price - remove any non-numeric characters except decimal point
      const cleanPrice = priceStr.replace(/[^\d.]/g, '');
      const price = parseFloat(cleanPrice) || 0;
      
      // Parse featured
      const featured = featuredStr.toUpperCase().trim() === 'TRUE';

      return {
        category: category.trim(),
        subcategory: subcategory.trim(),
        name: name.trim(),
        price,
        description: description.trim(),
        featured,
      };
    }).filter(service => service.name); // Filter out any empty services

    console.log('Fetched services:', services.length);
    console.log('Sample service:', services[0]);

    return services;
  } catch (error) {
    console.error('Error fetching services from Google Sheets:', error);
    throw error;
  }
}

// Group services by category
export function groupServicesByCategory(services: Service[]) {
  return services.reduce((acc, service) => {
    const category = service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);
}