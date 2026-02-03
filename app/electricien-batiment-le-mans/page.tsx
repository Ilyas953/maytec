import { Description, Header, Hero2, Service, serviceagr, servicebat, Certif, certifbat, Zone, PhotoBat, Photos, Contact, numero, mail, adresse,  } from "../components"
import { metaBatLeMans } from "../metadata"



export const metadata = metaBatLeMans;

export default function Page() {
    
    return (
    
    <>

    <Header />
    <Hero2 titreh1={`Électricien bâtiment au Mans : travaux électriques fiables et conformes`} soustitrehero={`Votre spécialiste en électricité bâtiment au Mans et aux alentours`}/>
<main>
 
    <Description titre="Plus de détails sur nous"

    texte={`Présent au Mans dans la Sarthe, nous réalisons l&apos;ensemble de vos travaux électriques dans les bâtiments neufs ou existants, avec une attention particulière portée à la sécurité et à la performance des installations. Rénovation complète, extension, dépannage ou modernisation, nos techniciens vous accompagnent à chaque étape du projet. Notre objectif est de garantir des équipements fiables, conformes aux normes en vigueur et parfaitement intégrés à vos usages quotidiens.`} />
 
  
     <Service titreh2="Nos domaines d'intervention" service={servicebat} secondtitre="Tous vos besoins électriques professionnels sont pris en charge !"/>
 
     <Photos titreh2="Installation de systèmes électriques" photos={PhotoBat}/>

      <Certif titreh2="Qu'est-ce qui nous distingue ?" service={certifbat} secondtitre="Nous faisons de la sécurité et de la fiabilité de vos installations notre priorité, tout en optimisant vos systèmes pour gagner en confort et en efficacité." />
  
  
      <Zone titreh2="Où sommes-nous localisés ?" texte="Notre équipe intervient dans la région du Mans pour tous types de bâtiments : bureaux, commerces et logements. Nous assurons des installations électriques sécurisées, des rénovations aux mises aux normes, avec un suivi personnalisé de chaque projet. Grâce à notre présence locale, nos interventions sont rapides et adaptées aux contraintes de vos bâtiments pour un service efficace et fiable." />
  
  
      <Contact titreh2="Faites appel à nos experts dès maintenant" soustitrehero="Besoin d&apos;aide ? Formulaire ou appel, réponse rapide assurée." />
  
</main>
    </>

    )
}