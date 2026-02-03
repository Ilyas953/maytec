import { Description, Header, Hero2, Service, serviceagr, servicebat, Certif, certifbat, Zone, PhotoBat, Photos, Contact, certifbat2, numero, adresse, mail,  } from "../components"
import { metaBatLeVaudreuil } from "../metadata"



export const metadata = metaBatLeVaudreuil;


export default function Page() {
    
    return (
    
    <>

    <Header />
    <Hero2 titreh1={`Électricien bâtiment au Vaudreuil : installations et rénovations électriques`} soustitrehero={`Installation, rénovation et mise aux normes électriques au Vaudreuil et aux alentours`}/>
<main>
 
    <Description titre="Nos domaines d'intervention"

    texte={`Nous accompagnons les particuliers et les professionnels pour tous leurs travaux d&apos;électricité dans le bâtiment, en construction comme en rénovation. Installation complète, rénovation de réseaux existants ou mise en conformité, chaque projet est étudié avec précision afin de garantir fiabilité et sécurité. Notre équipe intervient avec rigueur à chaque étape, de la conception à la maintenance, pour assurer des équipements durables et parfaitement adaptés à vos besoins, nous sommes localisés au Vaudreuil en Normandie.`} />
 
  
     <Service titreh2="Ce que nous réalisons" service={servicebat} secondtitre="Nous intervenons pour tous vos travaux électriques, en neuf comme en rénovation."/>
 
     <Photos titreh2="Maintenance et contrôle des systèmes électriques de bâtiments" photos={PhotoBat}/>

      <Certif titreh2="Pourquoi faire confiance à Maytec ?" service={certifbat2} secondtitre="Nous garantissons des installations électriques sûres et conformes, en intervenant sur vos bâtiments résidentiels et industriels pour assurer fiabilité et durabilité. Chaque chantier est suivi avec précision, de la conception à la maintenance." />
  
  
      <Zone titreh2="Où sommes-nous présents ?" texte="Nous intervenons sur tous les bâtiments résidentiels, commerciaux et industriels autour du Vaudreuil, en garantissant des installations électriques sûres et performantes. Que ce soit pour des constructions neuves, des rénovations ou la mise aux normes, notre équipe d&apos;électriciens du bâtiment se déplace rapidement pour répondre à vos besoins. Grâce à notre connaissance locale, nous assurons des interventions fiables, même dans les quartiers moins accessibles, tout en respectant les normes de sécurité les plus strictes." />
  
  
      <Contact titreh2="Vos besoins électriques nécessitent une action rapide ?" soustitrehero="Pour toute demande, contactez-nous : nous répondons rapidement." />
  
</main>
    </>

    )
}