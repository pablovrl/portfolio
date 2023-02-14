export const CONTACTS = [
  {
    name: "Mail",
    url: "mailto:pablovillarroel135@gmail.com",
    icon: "gmail",
    user: "pablovillarroel135@gmail.com",
    color: "bg-yellow-100"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pablo-villarroel-antillanca-850974186/",
    icon: "linkedin",
    user: "Pablo Villarroel Antillanca",
    color: "bg-pink-100"
  },
  {
    name: "GitHub",
    url: "https://github.com/pablovrl",
    icon: "github",
    user: "@pablovrl",
    color: "bg-purple-100"
  }
];

export interface Project {
  title: string;
  image: string;
  description: {
    en: string;
    es: string;
  };
  codeUrl: string;
  demoUrl?: string;
  wip?: boolean;
}

// image size 1300 x 1000
export const PROJECTS: Project[] = [
  {
    title: "Nestjs API Store",
    image: "api-store.png",
    description: {
      en: "API developed with Nestjs. It's the back-end of a store. It has a user system, products, categories, carts and JWT authentication. Currently in development.",
      es: "API desarrollada con Nestjs. Es el back-end de una tienda. Tiene un sistema de usuarios, productos, categorías, carritos y autenticación con JWT. Actualmente en desarrollo."
    },
    codeUrl: "https://github.com/pablovrl/nestjs-store-api",
    demoUrl: "https://nestjs-store-api-production.up.railway.app/api",
    wip: true,
  },
  {
    title: "Mi Portafolio UBB",
    image: "mi-portafolio-ubb.png",
    description: {
      en: "Website for the Computer Science students at the University of Bío-Bío. In which they can create and share a digital portfolio. Also employers can search students by their skills and contact them.",
      es: "Sitio web para los estudiantes de Ingeniería en Informática de la Universidad de Bío-Bío. En el cual pueden crear y compartir un portafolio digital. También los empleadores pueden buscar estudiantes por sus habilidades y contactarlos."
    },
    codeUrl: "https://github.com/pablovrl/mi-portafolio-ubb",
  },
];

export const PAGECONTENT = {
  en: {
    title: "Software Engineer. Building web applications.",
    description: [
      "Hi, my name is Pablo Villarroel, I'am a software engineer based in Concepción, Chile. I started my career in 2019, and since then, I've been learning web development in a self-taught way. I love challenges and I'm always looking for new opportunities to learn and improve my skills.",
      "If you want to know more about me, you can download my CV or contact me."
    ],
    cv: "Download CV",
    contact: "Contact me",
    projectsTitle: "Some projects I've developed",
    contactSubtitle: "Contact Information",
    contactTitle: "Let's talk, send me a message"
  },
  es: {
    title: "Ingeniero Informático. Creando aplicaciones web.",
    description: [
      "Hola, mi nombre es Pablo Villarroel, soy Ingeniero en Informática y vivo en Concepción, Chile. Comencé mi carrera en 2019, y desde entonces, he estado aprendiendo desarrollo web de forma autodidacta. Me encantan los desafíos y siempre estoy buscando nuevas oportunidades para aprender y mejorar mis habilidades.",
      "Si quieres saber más sobre mi, puedes descargar mi CV o contactarme."
    ],
    cv: "Descargar CV",
    contact: "Contáctame",
    projectsTitle: "Algunos proyectos que he desarrollado",
    contactSubtitle: "Información de contacto",
    contactTitle: "Hablemos, envíame un mensaje"
  }
}
