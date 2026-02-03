import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Footer, Header, mail, numero, adresse} from "./components";
import Script from "next/script";

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
          "telephone": {numero},
          "email": {mail},
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Rue de l&apos;Électricité",
            "addressLocality": "Le Vaudreuil",
            "addressRegion": "Normandie",
            "postalCode": "27100",
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
        <Schema />
      </head>
      <body
        className={`${inter}  antialiased text-white overflow-x-hidden `}
      >
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
