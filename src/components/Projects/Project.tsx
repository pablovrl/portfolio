import { Project as TProject } from "../../types";
import { Anchor } from "../Anchor";

interface ProjectProps {
  project: TProject;
}

export function Project({ project }: ProjectProps) {
  return (
    <div className="border-gray-100 border-2 rounded-lg flex flex-col h-full">
      <img src={project.image} className="rounded-t-lg"/>
      <div className="p-4 flex flex-col gap-4 justify-between h-full border-t-2 border-gray-100">
        <div>
          <p className="text-2xl font-bold">{project.title}</p>
          <p>{project.description.en}</p>
        </div>
        <div className="flex justify-between gap-4">
          <Anchor blank href={project.codeUrl} color="primary" fullWidth>
            Code
          </Anchor>
          <Anchor blank disabled={!project.demoUrl} href={project.demoUrl} color="secondary" fullWidth>
            Demo
          </Anchor>
        </div>
      </div>
    </div>
  );
}
