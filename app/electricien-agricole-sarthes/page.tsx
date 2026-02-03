import { Description, Header, Hero2, Service, serviceagr, servicebat, Certif, certifbat, Zone, PhotoBat, Photos, Contact, Photoagr, numero, mail, adresse,  } from "../components"
import { metaAgrSarthe } from "../metadata"



export const metadata = metaAgrSarthe;

export default function Page() {
    
    return (
    
    <>

    <Header />
    <Hero2 titreh1={`Électricien agricole en Sarthe Spécialiste des élevages`} soustitrehero={`Solutions sécurisées pour vos installations dans la Sarthe`}/>
<main>
 
    <Description titre="Ce que nous proposons"

    texte={`Nous mettons notre expertise au service des professionnels du monde agricole dans la région de la Sarthe pour des installations électriques fiables et conformes aux normes. Que ce soit pour moderniser vos bâtiments, alimenter de nouveaux équipements ou sécuriser vos réseaux existants, nous adaptons chaque intervention à vos contraintes spécifiques. Notre priorité est de garantir des systèmes performants qui accompagnent durablement le développement de votre exploitation.`} />
 
  
     <Service titreh2="Notre Expertise" service={serviceagr} secondtitre="Avec Maytec, vos installations électriques professionnelles sont entre de bonnes mains !"/>
 
     <Photos titreh2="Rénovation des réseaux électriques pour bâtiments agricoles" photos={Photoagr}/>

      <Certif titreh2="Nos avantages pour vos installations" service={certifbat} secondtitre="Notre savoir-faire en électricité agricole assure la conformité de vos équipements et la protection de vos exploitations, avec des interventions rapides et adaptées à vos besoins spécifiques." />
  
  
      <Zone titreh2="Où opérons-nous ?" texte="Dans la Sarthe, nous couvrons toutes les zones d&apos;intervention agricole, des grandes exploitations aux petits sites isolés. Nos électriciens spécialisés garantissent des installations fiables, conformes et performantes, tout en intervenant rapidement pour résoudre vos problèmes électriques et assurer la continuité de vos activités agricoles." />
  
  
      <Contact titreh2="Une urgence électrique ? Nous sommes là pour vous !" soustitrehero="Remplissez le formulaire ou téléphonez, nous planifions votre intervention sans attendre." />
  
</main>
    </>

    )
}