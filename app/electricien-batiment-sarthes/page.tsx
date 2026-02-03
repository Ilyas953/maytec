import { Description, Header, Hero2, Service, serviceagr, servicebat, Certif, certifbat, Zone, PhotoBat, Photos, Contact, numero ,adresse, mail,  } from "../components"
import { metaBatSarthe } from "../metadata"



export const metadata = metaBatSarthe;

export default function Page() {
    
    return (
    
    <>

    <Header />
    <Hero2 titreh1={`Électricien bâtiment dans la Sarthe : solutions sur mesure pour vos locaux`} soustitrehero={`Interventions rapides et conformes dans toute la Sarthe`}/>
<main>
 
    <Description titre="Informations générales"

    texte={`Actif dans la région de la Sarthe, nous intervenons sur tous types de bâtiments pour garantir des installations électriques sûres et performantes. Que ce soit pour des constructions neuves, des rénovations ou la mise aux normes de vos locaux, notre équipe met son expertise au service de chaque projet. Chaque intervention est réalisée avec soin, de l&apos;étude initiale à la maintenance, pour vous assurer sécurité et tranquillité d&apos;esprit.`} />
 
  
     <Service titreh2="Nos Solutions électriques " service={servicebat} secondtitre="Nous répondons à l&apos;ensemble de vos besoins en électricité."/>
 
     <Photos titreh2="Mise aux normes des installations électriques industrielles" photos={PhotoBat}/>

      <Certif titreh2="Les bénéfices de travailler avec nous" service={certifbat} secondtitre="Fiabilité, sécurité et conformité sont au cœur de nos interventions en bâtiment. Nous vous accompagnons dans la conception et la rénovation de vos systèmes électriques pour un confort optimal et durable." />
  
  
      <Zone titreh2="Localités prises en charge" texte="Nous couvrons l&apos;ensemble du département de la Sarthe pour les besoins électriques en bâtiment. Que ce soit pour des constructions neuves, des rénovations ou la maintenance de vos installations, nos électriciens spécialisés garantissent sécurité et performance. Même dans les zones rurales ou éloignées, nous assurons des interventions ponctuelles, efficaces et parfaitement conformes aux normes électriques." />
  
  
      <Contact titreh2="Faites intervenir nos experts électriciens rapidement" soustitrehero="Un appel ou un formulaire suffit, nous intervenons dans les meilleurs délais." />
  
</main>
    </>

    )
}