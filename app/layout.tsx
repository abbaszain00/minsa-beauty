import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Minsa Beauty & Aesthetics | Premium Aesthetic Treatments London",
  description:
    "Professional aesthetic treatments by certified practitioners. Specializing in advanced skin treatments, anti-aging procedures, and beauty therapy in Central London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
