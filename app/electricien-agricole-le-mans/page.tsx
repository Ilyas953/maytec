import { Description, Header, Hero2, Service, serviceagr, servicebat, Certif, certifbat, Zone, PhotoBat, Photos, Contact, Photoagr, certifagr1, numero, mail, adresse,  } from "../components"
import { metaAgrLeMans } from "../metadata"
import type { Metadata } from "next";

export const metadata = metaAgrLeMans;

export default function Page() {
    return (
    
    <>

    <Header />
    <Hero2 titreh1="Électricien agricole au Mans : maintenance et mise aux normes agricoles" soustitrehero={`Maintenance et équipements agricoles au Mans`} />
<main>
 
    <Description titre="Présentation du service"

    texte={`Présent dans la ville du Mans en Sarthe et ses alentours, nous intervenons auprès des exploitations agricoles pour sécuriser et optimiser leurs installations électriques. Bâtiments d&apos;élevage, hangars, systèmes d&apos;irrigation ou équipements automatisés, chaque infrastructure est étudiée avec précision. Nos solutions sont pensées pour résister aux contraintes du milieu agricole tout en améliorant la fiabilité et la performance de vos installations, afin d&apos;assurer la continuité de votre activité.`} />
 
  
     <Service titreh2="Que faisons-nous ?" service={serviceagr} secondtitre="Une prise en charge globale de vos équipements électriques dans le domaine agricole."/>
 
     <Photos titreh2="Installation électrique pour exploitation agricole" photos={Photoagr}/>

      <Certif titreh2="Pourquoi faire appel à notre expertise" service={certifagr1} secondtitre="Spécialistes de l&apos;électricité agricole, nous sécurisons vos installations pour vos exploitations et bâtiments agricoles, en garantissant performance et continuité de service pour vos équipements sensibles." />
  
  
      <Zone titreh2="Zones d'intervention" texte="Nous intervenons sur les installations électriques agricoles au Mans et ses environs, en sécurisant vos bâtiments et équipements pour éviter toute interruption de service. Nos interventions comprennent la maintenance, la mise aux normes et l&apos;optimisation énergétique de vos installations, avec un savoir-faire adapté à chaque exploitation agricole." />
  
  
      <Contact titreh2="Besoin de nos services dès maintenant ?" soustitrehero="Appelez ou remplissez le formulaire, je vous répondrai pour intervenir rapidement." />
  
</main>
    </>

    )
}