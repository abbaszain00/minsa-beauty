import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1532px',
    },
    fontFamily: {
      'dm-sans': ['DM Sans', 'serif'],
      'p22-mackinac': ['P22 Mackinac', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1D1D1D',
      white: '#FFFFFF',
      primary: '#453e21',
      secondary: '#938446',
      pink: '#FAECEC',
      gray: {
        DEFAULT: '#F0EDE6',
        dark: '#66655f',
      }
    },
    extend: {
      typography: (theme: any) => ({
        lg: {
          css: {
            h1: {
              fontSize: '34px',
            },
            h2: {
              fontSize: '26px',
              margin: '28px 0 18px 0 !important',
              lineHeight: '32px',
            },
            h3: {
              fontSize: '22px',
            },
            h4: {
              fontSize: '20px',
            },
            'ol > li::marker': {
              fontSize: '22px',
            },
          },
        },
        DEFAULT: {
          css: {
            '--tw-prose-bullets': theme('colors.primary'),
            '--tw-prose-counters': theme('colors.primary'),
            color: theme('colors.gray.dark'),
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 400,
            a: {
              color: theme('colors.secondary'),
              textDecoration: 'none',
              transitionDuration: '300ms',
              fontWeight: 500,
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              fontSize: '26px !important',
              fontFamily: 'P22 Mackinac',
              fontWeight: 600,
              margin: '24px 0 16px 0 !important',
              color: theme('colors.primary'),
            },
            h2: {
              fontSize: '22px',
              fontFamily: 'P22 Mackinac',
              fontWeight: 500,
              margin: '16px 0 10px 0 !important',
              color: theme('colors.primary'),
            },
            h3: {
              fontSize: '20px',
              fontFamily: 'P22 Mackinac',
              fontWeight: 500,
              lineHeight: '24px',
              margin: '0 0 12px 0 !important',
              color: theme('colors.primary'),
            },
            h4: {
              fontSize: '18px',
              fontFamily: 'P22 Mackinac',
              fontWeight: 600,
              margin: '0 0 12px 0 !important',
              color: theme('colors.primary'),
            },
            p: {
              fontSize: '16px',
              lineHeight: '24px',
              marginTop: '0px !important',
              color: theme('colors.gray.dark'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
};

export default config;