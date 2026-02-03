"use client"
import Image from "next/image";
import { Icon } from "@iconify/react";
import { ReactNode, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Aboreto } from "next/font/google";
import { ContactForm } from "./Formdevis";

export const marque = 'Maytec'
export const numero = '06 01 85 43 28'
export const mail = 'Contact@may-tec.net'
export const adresse = {
      "@type": "PostalAddress",
      "addressLocality": "Le Vaudreuil",
      "addressRegion": "Normandie",
      "postalCode": "27100",
      "streetAddress": "1 rue notre dame"
    }



















export const serviceagr = [{name: 'depannage urgent', icon: 'tabler:tool',}, {name: "creation de ligne/chaine d'alimentation", icon: 'mdi:seed-outline',}, {name: ' branchement/regulation', icon: 'mdi:flash',}, {name: 'systeme de ventilation automatique', icon: 'mdi:fan',},{name: 'renovation electrique chantier', icon: 'material-symbols:construction',}, {name: 'Maintenance', icon: 'uil:setting',}
]

export const servicebat = [{name: 'depannage urgent', icon: 'tabler:tool',}, {name: 'branchement telerupteur', icon: 'mingcute:remote-control-line',}, {name: ' depannage electricite generale', icon: 'mdi:flash',}, {name: 'mise aux normes', icon: 'material-symbols:shield-outline',},{name: 'renovation electrique chantier', icon: 'material-symbols:construction',}, {name: 'Maintenance', icon: 'uil:setting',}
]

export const certifbat = [ {name: 'expertise reconnue', icon: 'grommet-icons:user-expert', text: 'spécialisés et qualifie dans les systèmes électriques '}, {name: 'fiabilite et rapidite', icon: 'mdi:flash', text: 'interventions ponctuelles et respect des délais, surtout pour les urgences',}, {name: 'securite et conformite', icon: 'material-symbols:shield-outline', text: 'installations aux normes pour la protection du personnel et des occupants',},{name: 'devis gratuit et clair', icon: 'majesticons:money-line', text: 'transparence totale sur les coûts',}, {name: 'Accompagnement personnalise', icon: 'material-symbols:communication', text: 'Nous assurons un suivi de chaque projet, pour que vos installations restent fiables et durables ' ,}
]

export const certifbat2 = [
  {
    name: "Travaux soignés",
    icon: "mdi:hammer-wrench",
    text: "Installations propres, durables et adaptées à chaque type de bâtiment.",
  },
  {
    name: "Respect des normes",
    icon: "material-symbols:verified",
    text: "Conformité totale NFC 15-100 pour votre sécurité.",
  },
  {
    name: "Intervention rapide",
    icon: "mdi:clock-fast",
    text: "Disponibles rapidement pour dépannages et urgences électriques.",
  },
  {
    name: "Solutions modernes",
    icon: "mdi:home-lightning-bolt",
    text: "Optimisation énergétique et équipements récents.",
  },
  {
    name: "Relation de confiance",
    icon: "mdi:handshake",
    text: "Écoute, conseil et accompagnement du devis à la livraison.",
  },
]

export const certifbat3 = [
  {
    name: "Fiabilité totale",
    icon: "mdi:shield-home",
    text: "Chaque installation est vérifiée pour garantir une performance durable.",
  },
  {
    name: "Interventions planifiées",
    icon: "mdi:calendar-clock",
    text: "Respect strict des délais pour tous vos projets, des rénovations aux constructions neuves.",
  },
  {
    name: "Équipements modernes",
    icon: "mdi:lightbulb-on-outline",
    text: "Nous utilisons des matériels à la pointe pour un confort optimal et sécurisé.",
  },
  {
    name: "Équipe qualifiée",
    icon: "mdi:account-tie",
    text: "Nos électriciens certifiés interviennent avec expertise sur chaque chantier.",
  },
  {
    name: "Transparence totale",
    icon: "mdi:file-document-box-multiple-outline",
    text: "Devis détaillés et suivi précis pour une gestion sans surprise.",
  },
];

export const certifbat4 = [
  {
    name: "Maintenance proactive",
    icon: "mdi:tools",
    text: "Entretien régulier pour éviter les pannes et assurer la sécurité des locaux.",
  },
  {
    name: "Respect des normes",
    icon: "material-symbols:verified",
    text: "Conformité NFC 15‑100 pour toutes vos installations électriques.",
  },
  {
    name: "Optimisation énergétique",
    icon: "mdi:solar-power",
    text: "Solutions éco-énergétiques pour réduire vos coûts et votre impact environnemental.",
  },
  {
    name: "Service réactif",
    icon: "mdi:alarm-light",
    text: "Interventions rapides sur site en cas d&apos;urgence ou de dépannage.",
  },
  {
    name: "Accompagnement personnalisé",
    icon: "mdi:account-heart",
    text: "Suivi du projet de A à Z, avec conseils adaptés à chaque besoin.",
  },
];

export const certifagr1 = [
  {
    name: "Spécialiste agricole",
    icon: "mdi:tractor-variant",
    text: "Expertise dédiée aux bâtiments agricoles et exploitations.",
  },
  {
    name: "Continuité d'activité",
    icon: "mdi:factory",
    text: "Installations fiables pour éviter toute interruption de production.",
  },
  {
    name: "Matériel renforcé",
    icon: "mdi:shield-check",
    text: `Équipements résistants à l'humidité, poussière et corrosion.`,
  },
  {
    name: "Automatisation",
    icon: "mdi:cog-sync",
    text: "Ventilation, alimentation et régulation automatisées.",
  },
  {
    name: "Maintenance préventive",
    icon: "mdi:tools",
    text: "Contrôles réguliers pour sécuriser vos installations.",
  },
]




export const certifagr2 = [
  {
    name: "Sécurité du personnel",
    icon: "material-symbols:health-and-safety-outline",
    text: "Protection des équipes et des animaux sur site.",
  },
  {
    name: `Économies d'énergie`,
    icon: "mdi:leaf",
    text: "Optimisation des consommations électriques.",
  },
  {
    name: "Dépannage prioritaire",
    icon: "mdi:alert",
    text: "Interventions urgentes pour exploitations agricoles.",
  },
  {
    name: "Étude technique",
    icon: "mdi:file-document-outline",
    text: "Analyse complète avant chaque chantier.",
  },
  {
    name: "Suivi longue durée",
    icon: "mdi:calendar-check",
    text: "Accompagnement après travaux et maintenance continue possible.",
  },
]

export const certifagr3 = [
  {
    name: "Sécurité animale",
    icon: "mdi:paw",
    text: "Nos installations protègent le bétail et les équipements sensibles.",
  },
  {
    name: "Installation sur-mesure",
    icon: "mdi:vector-arrange-above",
    text: "Chaque ferme ou bâtiment agricole est analysé pour un système adapté.",
  },
  {
    name: "Réactivité en urgence",
    icon: "mdi:flash-alert",
    text: "Dépannage rapide pour éviter toute interruption de production.",
  },
  {
    name: "Optimisation des coûts",
    icon: "mdi:cash-multiple",
    text: "Équipements efficaces pour limiter la consommation d&apos;énergie.",
  },
  {
    name: "Conseils techniques",
    icon: "mdi:brain",
    text: "Guidance experte pour l&apos;amélioration et la sécurité des installations.",
  },
];

export const certifagr4 = [
  {
    name: "Fiabilité sur le terrain",
    icon: "mdi:earth",
    text: "Installations robustes adaptées aux conditions extérieures des exploitations.",
  },
  {
    name: "Surveillance continue",
    icon: "mdi:eye-outline",
    text: "Contrôle régulier pour prévenir tout incident électrique.",
  },
  {
    name: "Solutions durables",
    icon: "mdi:recycle",
    text: "Matériels durables pour une exploitation efficace et respectueuse de l&apos;environnement.",
  },
  {
    name: "Accompagnement complet",
    icon: "mdi:account-group",
    text: "Du projet initial à la maintenance, nous restons à vos côtés.",
  },
  {
    name: "Rapidité d&apos;intervention",
    icon: "mdi:timer-sand",
    text: "Interventions rapides même dans les zones rurales les plus isolées.",
  },
];

export const PhotoBat = [
    {
        url: '/panneauelec.jpeg',
        alt: 'un panneau electrique ouvert ',
    }
,
    {
        url: '/systemebatiment.jpeg',
        alt: 'un systeme electrique dans un batiment',
    }
,
    
]


export const Photoagr = [
    {
        url: '/heros.jpeg',
        alt: 'installation de chaine de nourriture electrique',
    }
,
    {
        url: '/SYSTEME ELEVAGE.jpeg',
        alt: 'systeme electrique a la ferme',
    },
    {
        url: '/systeme elevage2.jpeg',
        alt: 'image d un systeme electrique agricole',
    }
]


const aboreto = Aboreto({
    style:"normal",
    weight: "400"
  });

type boutonprops = {
    className?: string,
    children?: ReactNode
}

type ServiceItem = {
  name: string
  icon: string
  text?: string
}

type Photos = {
    url: string,
    alt: string
}
type titreprops = {
    titre?: string,
    titreh1?:string,
    soustitrehero?:string,
    texte?: string,
    titreh2?: string
    service ?: ServiceItem[],
    secondtitre ?: string,
    photos ?: Photos[]
}




export function Cardsimple({className, children}: boutonprops) {

    return (
        <div className={`${className} px-[15px] py-[24px] border-white border`}></div>
    )

}
export function Bouton({className, children}: boutonprops) {
    return (
        <>
      
        <div className={` flex flex-row gap-[10px] items-center text-[24px] px-5 py-[16px] bg-accent rounded-[8px] ${className}`}>
            {children}
            </div>
        
        </>
    )
}

export function SecondBouton({className, children}: boutonprops) {
    return (
        <>
      
        <div className={` flex flex-row gap-[10px]  text-[16px] px-5 py-[12px]  border-[1px] border-second rounded-[8px] justify-center items-center ${className}`}>
            {children}
            </div>
        
        </>
    )
}





export function Footer() {

    return (
        <footer className=" bg-accent w-full xl:min-h-75 text-white flex flex-col   items-center justify-center gap-16 py-16 px-8 lg:px-12 xl:items-start  ">
            <div className="flex flex-col gap-16  xl:flex-row justify-center ">
             <Image src={'/LOGOMAYTEC.png'} width={446} height={297} alt="logo de l'electricien maytec" className="w-fit h-auto drop-shadow-[4px] drop-shadow-accent/10 rounded-xl blur-xl" />
              <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-16 lg:h-full ">
                 <div className="text-white font-semibold text-2xl flex flex-col gap-6 text-center">
                     <p className="text-second text-[32px]">Navigation</p>
                      <a href="#accueil">Accueil</a>
                       <a href="#service">Nos services</a> <a href="#contact">Contact</a>
                        </div>
                         <div className="bg-second/50 w-full h-px lg:h-65 lg:w-0.5  "></div> 
                        <div className="text-white font-semibold text-2xl flex flex-col gap-6 text-center"> 
                            <p className="text-second text-[32px]">Contact</p>
                            <a href={`tel:${numero}`}> 
                            <div className="flex gap-2.5 items-center justify-center">
                                 <Icon icon="material-symbols:call" width="28" height="28" />
                         <span>{numero}</span>
                          </div>
                            </a>
            <a href={`mailto:${mail}`}>
                           <div className="flex gap-2.5 items-center justify-center"> 
                            <Icon icon="material-symbols:mail" width="28" height="28" /> 
              <span>{mail}</span> 
              </div>
              </a>
              </div> 
              </div> 
              </div>
            <div className="self-center text-center flex flex-col lg:flex-row gap-6">
                <a>Copyright © Maytec. touts droits réservés.</a>
                <Link href="/mentions-legales">Mentions légales</Link>
                <Link href="/conditions-generales-services">Condition générales services</Link>
            </div>
              </footer>
    )
}





export function Header() {

    const [burger, setBurger] = useState<boolean>(false)

    return (
     <>
     <nav>
     <div className="col-span-full w-full fixed px-[32px] py-[24px] top-0 left-0 z-50  flex flex-row items-center justify-between backdrop-blur-md text-white ">
        <p className={`text-2xl text-second ${aboreto.className} `}>{marque}</p>
            <div className="hidden lg:flex flex-row gap-8 text-[16px] ">
                <Link href="#accueil"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Accueil <span className=" transition-all duration-300 ease-in-out border-accent border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="#service"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">nos services <span className=" transition-all duration-300 ease-in-out border-accent border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="#contact"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Contact <span className=" transition-all duration-300 ease-in-out border-accent border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
            </div>


            <div className="flex flex-row gap-[16px] justify-center items-center  ">
                <a href={`tel:${numero}`}>
                <SecondBouton className="text-second absolute z-90  left-0 top-204 w-full lg:w-auto bg-accent lg:bg-accent/0 lg:static">
                <Icon icon='material-symbols:call' width={24} height={24}/>
                <p className="font-extrabold text-[16px]  ">{numero}</p>
                </SecondBouton>
                </a>
                <Link href="#contact">
                <Bouton className="items-center opacity-0 lg:opacity-100 ">
                    <Icon icon='material-symbols:mail' width={24} height={24} className="text-white"/>
                <p className=" text-[16px] font-semibold  ">Devis gratuit</p>
                </Bouton>
                </Link>
            </div>
            
        <button onClick={() => setBurger(true)} className="lg:hidden"> <Icon icon="qlementine-icons:menu-burger-16" className={ `${ !burger ? 'opacity-100': 'opacity-0'}  lg:hidden w-[44px] h-11 text-second`} /></button>
        
     </div>

     {burger && <div className=" fixed top-0 left-0  inset h-screen z-30 w-screen flex flex-col justify-center items-center px-8 py-8 bg-black/85 text-white">
                <div className=" self-end justify-self-start flex flex-row items-end "><button onClick={() => setBurger(false)}><Icon icon="akar-icons:cross" className="relative   w-[44px] h-11 text-second " /></button></div>
                 <div className=" row-start-1 mt-20 ml-10 col-span-full text-center items-center flex flex-col gap-8 text-[24px] font-semibold ">
                <Link href="#accueil"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out" onClick={()=> setBurger(false)}>Accueil <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="#nos services"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out" onClick={()=> setBurger(false)}>nos services <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="#contact"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out" onClick={()=> setBurger(false)}>Contact <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                
            </div>

                </div>
        
        }
        </nav>
     </>

    )
}

export function Hero({titreh1, soustitrehero}: titreprops) {
    return (
        <>
        <header id="accueil" className="  relative h-auto lg:h-screen grid grid-cols-12 lg:grid-rows-12  w-full px-[32px] py-[32px]  ">
            
      <Image
        src="/panneauelec.jpeg"
        alt="panneau electrique avec logo"
        fill 
        priority
        className=" object-cover object-center lg:object-bottom h-full"
      />

      <div className="absolute inset-0 bg-black/70" />
            <Header2 />
        <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}


className=" col-span-full lg:mx-auto mt-20 lg:row-start-6  lg:mt-0 text-center  w-full justify-center items-center flex flex-col gap-[48px]  z-20">
                <div className="flex flex-col gap-[16px]">
                <h1 className="   text-[32px] lg:text-[48px] font-extrabold text-center justify-center">{titreh1}</h1>
            <p className="text-[24px] text-[#E6E6E6] font-semibold text-center">{soustitrehero}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-[24px]">
                <Bouton className=" hidden opacity-0 lg:opacity-100 w-auto relative">
                        <Icon icon='material-symbols:call' width={24} height={24} className="text-white"/>
                <p className=" text-[16px] font-semibold  ">Appeler Maintenant</p>
                </Bouton>
                
            </div>
            <div className="flex flex-col justify-center items-center gap-[16px] w-full">
                <div className="flex flex-col lg:flex lg:flex-row gap-[16px] lg:gap-[24px]">
                <Link href="/electricien-agricole-normandie"><Bouton className="w-[350px] justify-between  relative"><p className=" text-[16px] font-semibold  ">electricien agricole normandie</p>
                            <Icon icon='maki:arrow' width={24} height={24} className="text-second"/>
                
                 </Bouton></Link>

                 <Link href="/electricien-agricole-sarthes"><Bouton className="w-[350px] justify-between"> <p className=" text-[16px] font-semibold  ">electricien agricole sarthes</p>
                            <Icon icon='maki:arrow' width={24} height={24} className="text-second"/>
                
                 </Bouton></Link>
                 </div>
                 <div className=" flex flex-col lg:flex lg:flex-row  gap-[16px] lg:gap-[24px]">
                <Link href="/electricien-batiment-normandie"><Bouton className="w-[350px] justify-between"> <p className=" text-[16px] font-semibold  ">electricien batiment normandie</p>
                            <Icon icon='maki:arrow' width={24} height={24} className="text-second"/>
                
                 </Bouton></Link>
                <Link href="/electricien-batiment-sarthes"> <Bouton className="w-[350px] justify-between"> <p className=" text-[16px] font-semibold  ">electricien batiment sarthes </p>
                            <Icon icon='maki:arrow' width={24} height={24} className="text-second"/>
                
                 </Bouton></Link>
                 </div>
        </div>
            </motion.div>

        </header>
        
        </>
    )
}


export function Hero2({titreh1, soustitrehero}: titreprops) {
    return (
        <>
        <header className="h-screen grid grid-cols-12 lg:grid-rows-12 w-full px-[32px]  ">
            
      <Image
        src="/panneauelec.jpeg"
        alt="panneau electrique avec logo"
        fill
        priority
        className=" object-bottom  "
      />

      <div className="absolute inset-0 bg-black/70" />
            <Header />
            <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}

    className="row-start-1 lg:row-start-6 col-span-full w-full justify-center items-center flex flex-col gap-[48px]  z-20">
                <div className="flex flex-col gap-[16px] lg:max-w-7xl">
            <h1 className="   text-[32px] lg:text-[48px] font-extrabold text-center justify-center">{titreh1}</h1>
            <p className="text-[24px] text-[#E6E6E6] font-semibold text-center">{soustitrehero}</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-[24px]">
                <Link href=""><Bouton>
                        <Icon icon='material-symbols:call' width={24} height={24} className="text-white"/>
                <p className=" text-[16px] font-semibold  ">Appeler Maintenant</p>
                </Bouton>
                </Link>
                <Link href="#contact">
                <SecondBouton><Icon icon='material-symbols:mail' width={24} height={24} className="text-second"/>
                <p className=" text-[16px] font-semibold text-second ">Obtenir un devis gratuit</p></SecondBouton>
                </Link>
            </div>
            </motion.div>

        </header>
        
        </>
    )
}

export function Description({titre, texte}: titreprops) { return (
    <div className="w-full h-auto relative bg-accent flex flex-col justify-center items-center gap-[24px] p-[32px]  ">
        <motion.div initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    
    className="bg-white/20 w-full flex flex-col gap-[24px] rounded-[12px] drop-shadow-[12px] drop-shadow-black/40 p-[32px] ">
        <h2 className="text-second text-center text-[32px] font-semibold">{titre}</h2>
            <p className="font-medium text-[20px]">{texte}</p>
        </motion.div>
    </div>)
}




export function Header2() {

    const [burger, setBurger] = useState<boolean>(false)

    return (
     <>
     <nav>
     <div className="col-span-full w-full fixed px-[32px] py-[24px] top-0 left-0 z-50  flex flex-row items-center justify-between backdrop-blur-md text-white ">
        <p className={`text-2xl text-second ${aboreto.className} `}>{marque}</p>
            


            <div className="flex flex-row gap-[16px] justify-center items-center  ">
                <a href={`tel:${numero}`}>
                <SecondBouton className="text-second absolute z-90  left-0 top-204 w-full lg:w-auto bg-accent lg:bg-accent/0 lg:static">
                <Icon icon='material-symbols:call' width={24} height={24}/>
                <p className="font-extrabold text-[16px]  ">{numero}</p>
                </SecondBouton>
                </a>
                
                    <Link href='#contact'>
                <Bouton className="items-center opacity-0 lg:opacity-100 ">
                    <Icon icon='material-symbols:mail' width={24} height={24} className="text-white"/>
                <p className=" text-[16px] font-semibold  ">Devis gratuit</p>
                </Bouton>
                </Link>
                
            </div>
            
        
        
     </div>

     
        </nav>
     </>

    )
}

export function Service({titreh2, service, secondtitre}: titreprops) {
    return (
        <>
        <section id="service" className="w-full h-fit flex flex-col gap-[64px]  bg-fond px-[32px] py-[32px] lg:py-[64px]">
            <h2 className="text-[32px] text-second font-semibold text-center col-span-12 lg:self-start">{titreh2}</h2>
            <div className="flex flex-col gap-[24px] items-center w-full lg:grid lg:grid-cols-12  lg:col-span-full">
            {service?.map((a, index) => { return (
                <motion.div  initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    key={index} className="w-full p-6 h-auto lg:col-span-4 lg:row-span-1  bg-accent text-[24px] font-bold text-second flex flex-col rounded-[12px] items-center text-center"><Icon icon={a.icon} width={48} height={48} /><p>{a.name}</p></motion.div>
                 ) })}
            </div>
            <p className="text-[32px] text-second font-semibold text-center col-span-12 lg:self-end">{secondtitre}</p>


        </section>
        </>
    )
}

export function Certif({titreh2, service, secondtitre}:titreprops) {
    return (
        <>
        <section className="w-full h-fit flex flex-col gap-[64px]  bg-fond/99 px-[32px] py-[32px] lg:py-[64px]">
            <h2 className="text-[32px] text-second font-semibold text-center col-span-12 ">{titreh2}</h2>
            <motion.div initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }} className="flex flex-col gap-[24px] items-center w-full  ">
            <div className=" w-full justify-center items-center flex flex-col lg:flex-row gap-[24px]">
            {service?.slice(0,3).map((a, index) => { return (
                <div key={index} className=" w-full h-auto lg:h-[356px]   2xl:w-[500px]  p-6  lg:col-span-4 lg:row-span-1  bg-accent text-[24px] font-bold text-second flex flex-col gap-6 rounded-[12px] items-center text-center"><Icon icon={a.icon} width={48} height={48} /><p>{a.name}</p>
                 <p className="text-[20px] font-medium text-white">{a.text}</p>
                </div>
                 ) })}
            </div>
            <div className="flex flex-col lg:flex-row gap-[24px]">
             {service?.slice(3).map((a, index) => { return (
                <div key={index} className="w-full h-auto lg:h-[356px] lg:w-[500px]  p-6  lg:col-span-4 lg:row-span-1  bg-accent text-[24px] font-bold text-second flex flex-col rounded-[12px] items-center text-center gap-6"><Icon icon={a.icon} width={48} height={48} /><p>{a.name}</p>
                <p className="text-[20px] font-medium text-white">{a.text}</p>
                </div>
                 ) })}
                 </div>
            </motion.div>
            <p className="text-[32px] text-second font-semibold text-center col-span-12 ">{secondtitre}</p>


        </section>
        </>
    )
}

export function Zone({titreh2, texte}:titreprops) {
    return (
        <>
<section>
         <div className="w-full h-auto relative bg-fond flex flex-col justify-center items-center gap-[24px] p-[32px]  ">
        <motion.div initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }} className="bg-accent w-full flex flex-col gap-[24px] rounded-[12px] drop-shadow-[12px] drop-shadow-black/40 p-[32px] ">
        <h2 className="text-second text-center text-[32px] font-semibold">{titreh2}</h2>
            <p className="font-medium text-[20px]">{texte}</p>
        </motion.div>
    </div>
</section>
        </>
    )
}

export function Contact({titreh2, soustitrehero}: titreprops) {
    return (
        <>
        <section id="contact" className="relative grid grid-cols-12  w-full h-auto  p-[32px] z-30  ">
            
      <Image
        src="/systemebatiment.jpeg"
        alt="systeme electrique d'un batiment"
        fill
        priority
        className=" object-bottom "
      />

      <div className="absolute inset-0 bg-black/70" />
            
            <motion.div initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
     className="row-start-1 lg:row-start-6 col-span-full w-full justify-center items-center flex flex-col gap-[48px]  z-80">
                <div className="flex flex-col gap-[16px] text-center">
                    <h2 className="font-extrabold text-[32px]">{titreh2}</h2>
                    <p className="font-semibold text-[24px]">{soustitrehero}</p>
            </div>
            <div className="flex flex-col gap-[24px]">
                <a href={`tel:${numero}`}>
                <Bouton className="justify-center">
                        <Icon icon='material-symbols:call' width={24} height={24} className="text-white"/>
                <p className=" text-[16px] font-semibold  ">Appeler Maintenant</p>
                </Bouton>
                </a>
                <a href="" className="flex flex-col lg:flex-row gap-[10px] border border-white w-full px-6 py-[15px] text-[20px] font-semibold justify-center items-center rounded-[12px]">
                    <Icon icon='material-symbols:mail' width={24} height={24} className="text-white"/> <p>{mail}</p>
                </a>
            
            </div>

            <div className="flex flex-col w-full gap-[16px] justify-center items-center">
                <ContactForm />
            </div>
            </motion.div>

        </section>
        
        </>
    )
}


export function Photos({titreh2, photos}: titreprops) {


    



    return (
        <>
        <div className=" bg-fond h-auto w-full p-[32px] flex flex-col justify-center items-center  gap-[32px]">
            <div className="bg-accent h-auto w-full flex flex-col p-[32px] gap-[32px] rounded-[12px] lg:justify-center lg:items-center ">
            <h2 className="text-center text-second font-semibold text-[32px]">{titreh2}</h2>
            <div className="flex flex-col custom:flex-row justify-center items-center gap-[24px]">
         {photos?.map((a,i) => {
            return(
                <Image src={a.url} key={i} alt={a.alt} width={440} height={440}  className={`object-cover drop-shadow-2xl drop-shadow-black rounded-[12px] ${photos?.length === 2 ? 'h-[500px]' : 'h-auto'}`} />
            )
         })}
            </div>
            </div>
        </div>
        </>
    )
}






