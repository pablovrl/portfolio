import { PROJECTS } from "../../data";
import { SectionLayout } from "../layout/SectionLayout";
import { Project } from "./Project";

export function Projects() {
  return (
    <SectionLayout id="projects">
      <h1 className="text-2xl font-bold mb-4">
        Some projects I&apos;ve developed
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </SectionLayout>
  );
}
