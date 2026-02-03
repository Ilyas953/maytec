

import Image from "next/image";
import { Header, Hero, Description } from "./components";

export const metaBatLeVaudreuil = {
  title: "Électricien en Normandie et Sarthes | Maytec",
  description: "Maytec, votre électricien agricole et bâtiment en Normandie et Sarthe. Cliquez pour accéder à nos services spécialisés et obtenir un devis rapide.",
  robots: "index, follow",
  canonical: "https://www.may-tec.net/",
  openGraph: {
    title: "Électricien en Normandie et Sarthes | Maytec",
    description: "Maytec, votre électricien agricole et bâtiment en Normandie et Sarthe. Cliquez pour accéder à nos services spécialisés et obtenir un devis rapide.",
    url: "https://www.may-tec.net/",
    site_name: "Maytec",
    type: "website",
    images: [
      { url: "/LOGOMAYTEC.png", width: 1200, height: 630, alt: "Électricien bâtiment Le Vaudreuil | Maytec" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Maytec",
    title: "Électricien en Normandie et Sarthes | Maytec",
    description: "Maytec, votre électricien agricole et bâtiment en Normandie et Sarthe. Cliquez pour accéder à nos services spécialisés et obtenir un devis rapide.",
    image: "/LOGOMAYTEC.png",
  },
};


/* export const metadata = {
  title: "Électricien en Normandie et Sarthe | Maytec",
  description: "Maytec, votre électricien agricole et bâtiment en Normandie et Sarthe. Cliquez pour accéder à nos services spécialisés et obtenir un devis rapide.",
  robots: "index, follow",
  openGraph: {
    title: "Électricien en Normandie et Sarthe | Maytec",
    description: "Maytec, votre électricien agricole et bâtiment en Normandie et Sarthe. Installation, rénovation et maintenance pour professionnels et particuliers.",
    url: "https://www.monsite.com",
    siteName: "Maytec",
    type: "website",
    images: [
      {
        url: "https://www.monsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Électricien Maytec"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Électricien en Normandie et Sarthe | Maytec",
    description: "Maytec, votre électricien agricole et bâtiment en Normandie et Sarthe. Installation, rénovation et maintenance.",
    images: ["https://www.monsite.com/og-image.jpg"]
  }
};
*/


export default function Home() {
  return (
    <>
    <Hero titreh1="Électricien agricole et bâtiment en Normandie et Sarthe, Installation & rénovation" soustitrehero="Spécialiste des installations électriques pour bâtiments et exploitations agricoles, au service des professionnels et particuliers."/>
    <Description titre="
    Qui sommes-nous ?
    
    
    " texte="

    Nous sommes Maytec, électricien agricole et du bâtiment. Notre entreprise accompagne les professionnels et particuliers pour tous leurs travaux d&apos;électricité en bâtiment et en milieu agricole. Nous réalisons l&apos;installation, la rénovation et la maintenance de vos systèmes électriques, dans le respect des normes en vigueur. Présents en Normandie et en Sarthe, nous intervenons rapidement surtout pour les dépannages urgents pour sécuriser vos installations et optimiser leurs performances. Grâce à notre expertise terrain et à notre approche personnalisée, chaque projet bénéficie d&apos;un suivi sérieux et transparent, du devis à la livraison finale

    
    " />
     
    </>
  );
}
