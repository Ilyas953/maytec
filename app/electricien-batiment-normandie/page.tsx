import { Description, Header, Hero2, Service, serviceagr, servicebat, Certif, certifbat, Zone, PhotoBat, Photos, Contact, numero, adresse, mail,  } from "../components"
import { metaBatNormandie } from "../metadata"



export const metadata = metaBatNormandie;

export default function Page() {
    
    return (
    
    <>

    <Header />
    <Hero2 titreh1={`Électricien bâtiment en Normandie : expertise pour particuliers et professionnels`} soustitrehero={`Des solutions électriques fiables partout en Normandie`}/>
<main>
 
    <Description titre="Plus de détails"

    texte={`Basé en Normandie, spécialisés dans les installations électriques du secteur bâtiment, nous prenons en charge vos projets résidentiels, tertiaires et industriels. Du câblage aux tableaux électriques en passant par l&apos;éclairage et la mise aux normes, nous proposons des solutions performantes et sécurisées. Chaque intervention repose sur un diagnostic précis et un travail soigné, afin de vous offrir confort, conformité et sérénité sur le long terme.`} />
 
  
     <Service titreh2="Ce que nous proposons" service={servicebat} secondtitre="Une solution fiable pour l&apos;ensemble de vos installations électriques."/>
 
     <Photos titreh2="Travaux électriques pour constructions neuves et rénovations" photos={PhotoBat}/>

      <Certif titreh2="Ce qui fait notre différence" service={certifbat} secondtitre="Notre expertise en électricité du bâtiment permet de sécuriser vos locaux tout en optimisant l&apos;efficacité énergétique. Nous réalisons des branchements, rénovations et mises aux normes avec rigueur et professionnalisme !" />
  
  
      <Zone titreh2="Électricien du bâtiment dans toute la Normandie" texte="Maytec couvre l&apos;ensemble de la Normandie pour tous vos travaux électriques dans le secteur du bâtiment. Nos électriciens qualifiés interviennent sur vos locaux professionnels ou résidentiels, offrant fiabilité et sécurité. Nous nous déplaçons dans toutes les villes et zones rurales normandes pour garantir des installations conformes et durables, en optimisant vos systèmes électriques pour le confort et l&apos;efficacité énergétique." />
  
  
      <Contact titreh2="Intervention urgente ? Contactez nos spécialistes" soustitrehero="Formulaire ou téléphone, votre urgence sera traitée immédiatement." />
  
</main>
    </>

    )
}