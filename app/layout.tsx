import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Footer, Header, mail, numero, adresse} from "./components";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Maytec - Électricien bâtiment et agricole",
  description: "Électricien spécialisé en bâtiment et agricole en Normandie, fournissant des installations électriques sûres et conformes.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Maytec - Électricien bâtiment et agricole",
    description: "Électricien spécialisé en bâtiment et agricole en Normandie",
    url: "https://www.may-tec.net",
    siteName: "Maytec",
    images: [
      {
        url: "/LOGOMAYTEC.png",
        width: 1200,
        height: 630,
        alt: "Maytec - Électricien",
      },
    ],
    type: "website",
  },
};

export  function Schema() {
  return (
    <Script
      type="application/ld+json"
      id="schema"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Electrician", // Type de l'entreprise
          "name": "Maytec",
          "url": "https://www.may-tec.net",
          "logo": "/LOGOMAYTEC.png",
          "image": "/LOGOMAYTEC.png",
          "description": "Électricien spécialisé en bâtiment et agricole en Normandie, fournissant des installations électriques sûres et conformes.",
          "telephone": numero,
          "email": mail,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": adresse.streetAddress,
            "addressLocality": adresse.addressLocality,
            "addressRegion": adresse.addressRegion,
            "postalCode": adresse.postalCode,
            "addressCountry": "FR"
          },
          "areaServed": [
            "Le Vaudreuil",
            "Le Mans",
            "Sarthe",
            "Normandie"
          ],
          "sameAs": [
            "https://www.facebook.com/maytec",
            
            
          ],
          "priceRange": "€€",
          "serviceType": ["Électricien bâtiment", "Électricien agricole"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services Maytec",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Installation électrique bâtiment"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Installation électrique agricole"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Maintenance et dépannage"
                }
              }
            ]
          }
        })
      }}
    />
  );
}



const inter = Inter({
  
  subsets: ["latin"],
});

  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="4ZuJ6dKcv2aPZIJ8retffSM4QymqDhjbPebRJ8TQss8" />
      </head>
      <body
        className={`${inter}  antialiased text-white overflow-x-hidden `}
      >
        <Schema />
        {children}
        <Footer />
      </body>
    </html>
  );
}
