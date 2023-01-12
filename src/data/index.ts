export const URLS = {
  cv: "https://docs.google.com/document/d/1xa9UIY9VXdLW8a-D5NGnUd-NSonwUVlNbnpOmSzTOt4/edit?usp=share_link",
  github: "https://github.com/pablovrl",
  linkedin:
    "https://www.linkedin.com/in/pablo-villarroel-antillanca-850974186/",
};

interface Project {
  title: string;
  image: string;
  description: string;
  codeUrl: string;
  demoUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Mi Portafolio UBB",
    image: "placeholder.png",
    description:
      "Website for the Computer Science students at the University of Bío-Bío. In which they can create and share a digital portfolio.",
    codeUrl: "https://github.com/pablovrl/mi-portafolio-ubb",
    demoUrl: undefined,
  },
  {
    title: "Auth App",
    image: "placeholder.png",
    description:
      "Web application created to learn how authentication (using cookies) and protected routes works.",
    codeUrl: "https://github.com/pablovrl/auth-app",
    demoUrl: undefined,
  },
  {
    title: "Docmovi's technical test",
    image: "placeholder.png",
    description:
      "Technical test to enter as an intern at Docmovi. Using a back-end and front-end framework called Meteor.",
    codeUrl: "https://github.com/pablovrl/prueba-docmovi",
    demoUrl: undefined,
  },
];