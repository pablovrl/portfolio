import { Project } from "../types";
import apiStoreImage from "../assets/api-store.png";
import miPortafolioUbbImage from "../assets/mi-portafolio-ubb.png";

export const PROJECTS: Project[] = [
  {
    title: "Nestjs API Store",
    image: apiStoreImage,
    description: {
      en: "API developed with Nestjs. It's the back-end of a store. It has a user system, products, categories, carts and JWT authentication. Currently in development.",
      es: "API desarrollada con Nestjs. Es el back-end de una tienda. Tiene un sistema de usuarios, productos, categorías, carritos y autenticación con JWT. Actualmente en desarrollo.",
    },
    codeUrl: "https://github.com/pablovrl/nestjs-store-api",
    demoUrl: "https://nestjs-store-api-production.up.railway.app/api",
    wip: true,
  },
  {
    title: "Mi Portafolio UBB",
    image: miPortafolioUbbImage,
    description: {
      en: "Website for the Computer Science students at the University of Bío-Bío. In which they can create and share a digital portfolio. Also employers can search students by their skills and contact them.",
      es: "Sitio web para los estudiantes de Ingeniería en Informática de la Universidad de Bío-Bío. En el cual pueden crear y compartir un portafolio digital. También los empleadores pueden buscar estudiantes por sus habilidades y contactarlos.",
    },
    codeUrl: "https://github.com/pablovrl/mi-portafolio-ubb",
  },
];
