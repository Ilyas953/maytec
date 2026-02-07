import { Description, Header, Hero2, Service, serviceagr, servicebat, Certif, certifbat, Zone, PhotoBat, Photos, Contact, certifagr2, Photoagr, numero, mail, adresse,  } from "../components"
import { metaAgrLeVaudreuil } from "../metadata"



export const metadata = metaAgrLeVaudreuil;

export default function Page() {
    
    return (
    
    <>

    <Header />
    <Hero2 titreh1={`Électricien agricole au Vaudreuil : systèmes électriques pour exploitations`} soustitrehero={`Réseaux électriques performants pour exploitations au Vaudreuil`} />
<main>
 
    <Description titre="Aperçu du service"

    texte={`Localisé au Vaudreuil en Normandie, nous intervenons sur tous types d'installations électriques agricoles pour assurer des systèmes fiables et sécurisés. Que ce soit pour des bâtiments d'élevage, des serres ou des locaux de stockage, notre équipe apporte son expertise pour garantir une installation conforme aux normes et parfaitement adaptée à vos besoins. Chaque projet est suivi avec soin, de l'étude initiale à la maintenance, pour votre tranquillité d'esprit.`} />
 
  
     <Service titreh2="Nos prestations" service={serviceagr} secondtitre="Nous vous accompagnons pour chaque intervention électrique dans vos exploitations."/>
 
     <Photos titreh2="Mise en place de systèmes électriques dans les fermes" photos={Photoagr}/>

      <Certif titreh2="Faire confiance à Maytec, c'est choisir la sécurité" service={certifagr2} secondtitre="Nous optimisons vos systèmes électriques agricoles pour fiabilité et sécurité, tout en réduisant les risques d'interruption pour vos installations de production et stockage." />
  
  
      <Zone titreh2="Où agissons-nous ?" texte="Nous assurons l'électricité agricole autour du Vaudreuil, en intervenant sur vos exploitations, serres, bâtiments de stockage et équipements sensibles. Notre équipe se déplace rapidement pour sécuriser vos installations, prévenir les pannes et garantir la continuité de vos activités agricoles. Chaque intervention est pensée pour optimiser la performance et la fiabilité de vos systèmes électriques agricoles." />
  
  
      <Contact titreh2="Besoin d'un électricien qualifié immédiatement ?" soustitrehero="Contactez-nous par téléphone ou via le formulaire, nous répondons rapidement pour intervenir." />
  
</main>
    </>

    )
}