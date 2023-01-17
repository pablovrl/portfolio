export const CONTACTS = [
  {
    name: "GitHub",
    url: "https://github.com/pablovrl",
    icon: "github",
    user: "@pablovrl",
    color: "bg-purple-100"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pablo-villarroel-antillanca-850974186/",
    icon: "linkedin",
    user: "Pablo Villarroel Antillanca",
    color: "bg-pink-100"
  },
  {
    name: "Mail",
    url: "mailto:pablovillarroel135@gmail.com",
    icon: "gmail",
    user: "pablovillarroel135@gmail.com",
    color: "bg-yellow-100"
  }
];

interface Project {
  title: string;
  image: string;
  description: {
    en: string;
    es: string;
  };
  codeUrl: string;
  demoUrl?: string;
}

// image size 1300 x 1000
export const PROJECTS: Project[] = [
  {
    title: "Mi Portafolio UBB",
    image: "mi-portafolio-ubb.png",
    description: {
      en: "Website for the Computer Science students at the University of Bío-Bío. In which they can create and share a digital portfolio.",
      es: "Sitio web para los estudiantes de Ingeniería en Informática de la Universidad de Bío-Bío. En el cual pueden crear y compartir un portafolio digital."
    },
    codeUrl: "https://github.com/pablovrl/mi-portafolio-ubb",
    demoUrl: undefined,
  },
  {
    title: "Auth App",
    image: "auth-app.png",
    description: {
      en: "Web application created to learn how authentication (using cookies) and protected routes works.",
      es: "Aplicación web creada para aprender como funciona la autenticación (usando cookies) y las rutas protegidas."
    },
    codeUrl: "https://github.com/pablovrl/auth-app",
    demoUrl: undefined,
  },
  {
    title: "Docmovi's technical test",
    image: "placeholder.png",
    description: {
      en: "Technical test to enter as an intern at Docmovi. Using a back-end and front-end framework called Meteor.",
      es: "Prueba técnica para entrar como interno en Docmovi. Usando un framework de back-end y front-end llamado Meteor."
    },
    codeUrl: "https://github.com/pablovrl/prueba-docmovi",
    demoUrl: undefined,
  },
];

export const PAGECONTENT = {
  en: {
    title: "Software Engineer. Building web applications.",
    description: [
      "Hi!, my name is Pablo Villarroel, I'am a software engineer based in Concepción, Chile. I've been studying Computer Science for 4 years at the University of Bío-Bío. Actually I'm building projects with TypeScript, Next.js, React, and Node.js.",
      "I have experience developing with different technologies, such as Docker, PHP, Java and C. As well with databases like MySQL, PostgreSQL and MongoDB.",
      "If you want to know more about me, you can download my CV or contact me."
    ],
    cv: "Download CV",
    projectsTitle: "Some projects I've developed",
    contactSubtitle: "Contact Information",
    contactTitle: "Let's talk, send me a message"
  },
  es: {
    title: "Ingeniero Informático. Creando aplicaciones web.",
    description: [
      "Hola!, mi nombre es Pablo Villarroel, soy Ingeniero en Informática y vivo en Concepción, Chile. Estudié por 4 años en la Universidad de Bío-Bío y actualmente estoy construyendo proyectos con TypeScript, Next.js, React y Node.js.",
      "Tengo experiencia desarrollando con diferentes tecnologías, entre las cuales se encuentran Docker, PHP, Java and C. También he trabajado con bases de datos como MySQL, PostgreSQL y MongoDB.",
      "Si quieres saber más sobre mi, puedes descargar mi CV o contactarme."
    ],
    cv: "Descargar CV",
    projectsTitle: "Algunos proyectos que he desarrollado",
    contactSubtitle: "Información de contacto",
    contactTitle: "Hablemos, envíame un mensaje"
  }
}
