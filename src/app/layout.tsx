import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({ 
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nargis Makeup Artist | Bridal & Beauty Makeup Artist in Lucknow",
  description: "Professional bridal makeup, party makeup, Navratri makeup, hairstyling, beauty care and home salon services by Nargis Makeup Artist in Lucknow.",
  keywords: "makeup artist in Lucknow, bridal makeup artist Lucknow, party makeup Lucknow, Navratri makeup Lucknow, Dandiya makeup Lucknow, home salon services Lucknow, bridal makeup, engagement makeup, reception makeup",
  authors: [{ name: "Nargis Makeup Artist" }],
  openGraph: {
    title: "Nargis Makeup Artist | Professional Beauty Services in Lucknow",
    description: "Transform your look with professional makeup and beauty services. Bridal, Party, Navratri makeup and more.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Nargis Makeup Artist",
    "description": "Professional bridal makeup, party makeup, Navratri makeup, hairstyling, beauty care and home salon services in Lucknow.",
    "image": "/hero-bridal.jpg",
    "telephone": "+918303407836",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "E Block Market, Raja Ji Puram Market, Shop No. 209",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "openingHours": "Mo-Sa 10:00-20:00",
    "sameAs": [
      "https://instagram.com/nargiskhan4544"
    ]
  };

  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
