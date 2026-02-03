import { Description, Header, Hero2, Service, serviceagr, servicebat, Certif, certifbat, Zone, PhotoBat,Photoagr, Photos, Contact, numero, mail, adresse,  } from "../components"
import { metaAgrNormandie } from "../metadata"





export const metadata = metaAgrNormandie;

export default function Page() {
    
    return (
    
    <>

    <Header />
    <Hero2 titreh1={`Électricien agricole en Normandie : équipements sécurisés pour vos installations`} soustitrehero={`Expertise électrique agricole en Normandie`}/>
<main>
 
    <Description titre="Notre Expertise"

    texte={`Spécialisés dans l&apos;électricité agricole et agissant dans toute la Normandie, nous accompagnons les exploitants dans l&apos;installation, la rénovation et la maintenance de leurs équipements électriques. Traite automatisée, ventilation, éclairage ou tableaux de distribution, chaque système est conçu pour répondre aux exigences du terrain. Nous privilégions des solutions durables et sécurisées, permettant d&apos;améliorer votre productivité tout en réduisant les risques de panne.`} />
 
  
     <Service titreh2="Nos services" service={serviceagr} secondtitre="Nous intervenons sur tous types d&apos;installations électriques en Normandie."/>
 
     <Photos titreh2="Mise en place de systèmes électriques dans les fermes" photos={Photoagr}/>

      <Certif titreh2="Pourquoi opter pour nos services" service={certifbat} secondtitre="Notre savoir-faire en électricité agricole assure la conformité de vos équipements et la protection de vos exploitations, avec des interventions rapides et adaptées à vos besoins spécifiques." />
  
  
      <Zone titreh2="Maytec, très présent en Normandie !" texte="Maytec se déplace dans toute la Normandie pour l&apos;électricité agricole. Nous intervenons sur les exploitations, hangars et systèmes de production pour garantir sécurité et fiabilité. Nos électriciens connaissent parfaitement le terrain local et les besoins spécifiques des exploitations agricoles, ce qui nous permet d&apos;assurer des interventions efficaces même dans les zones les plus reculées." />
  
  
      <Contact titreh2="Une urgence électrique ? Nous sommes là pour vous !" soustitrehero="Appelez-nous ou envoyez votre demande, notre équipe vous recontacte dès que possible." />
  
</main>
    </>

    )
}