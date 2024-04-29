export type Project = {
  title: string;
  image: string;
  description: {
      en: string;
      es: string;
  };
  codeUrl?: string;
  demoUrl?: string;
  wip?: boolean;
}