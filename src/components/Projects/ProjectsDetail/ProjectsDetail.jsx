"use client"; // Ensure this is a Client Component

import { useParams } from "next/navigation";

const data = [
  {
    id: 1,
    title: "ACTDO Mangement Information System",
    techStack: ["html", "css", "js", "MySql"],
    githubLink: "/",
    projectSummary: "explain ko muna",
    sampleImageProject: ["none", "none", "none", "none"],
    aim: ["none", "none", "none"],
    technologiesUsed: [
      {
        frontEnd: "asasdasd",
        backEnd: "asdasdasd",
        dataBase: "asdasdasd",
      },
    ],
    dataBaseDiagram: "image",
    implementation: [
      {
        frontEnd: ["asasdasd", "asasdasd", "asasdasd"],
        backEnd: ["asdasdasd", "asasdasd", "asasdasd"],
        dataBase: ["asdasdasd", "asasdasd", "asasdasd"],
      },
    ],
  },
  {
    id: 2,
    title: "Another Project",
    techStack: ["Vue", "Tailwind", "Laravel"],
  },
];

export default function ProjectDetail() {
  const params = useParams(); // Get route parameters
  const { id } = params; // Extract 'id'

  const project = data.find((p) => p.id === Number(id));

  if (!project) return <h1>Project not found</h1>;

  return (
    // <div>
    //   <h1>{project.title}</h1>
    //   <p>Tech Stack: {project.techStack.join(", ")}</p>
    // </div>

    <div className=" contianer px-4 pt-20 lg:pt-32 mx-auto max-w-screen-lg">
      <h1 className=" text-3xl lg:text-5xl mb-5 font-bold">{project.title}</h1>
      <div className=" flex gap-2">
        <div className="mb-10">
          <h3 className="text-pretty text-text-100/60">Technologies:</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <div
                key={index}
                className="py-1 px-2 rounded-md bg-accent-200 flex justify-center gap-2 items-center border text-text-100"
              >
                <p className="capitalize text-sm"># {tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap gap-2 mb-10">
        <p className="">GitHub:</p>
        <div className=" flex gap-1">
          <a
            href="http://"
            target="_blank"
            className=" text-pretty text-primary-100 underline"
          >
            {project.githubLink}
          </a>
        </div>
        <p></p>
      </div>
      <article className=" prose mb-20 lg:prose-lg">
        {/* Project Summary */}
        <h2 id="resumen-del-proyecto">Project Summary</h2>
        <p className="mb-5">{project.projectSummary}</p>

        {/* Objective */}
        <h2 id="Objective">Aim</h2>
        <p>
          The main goal of {project.title} is to provide users with an all-in-on
          tool to:
        </p>
        <ul>
          {project.aim.map((aims, index) => (
            <li key={index}>{aims}</li>
          ))}
        </ul>

        {/* Objective */}
        <h2 id="Objective">Technologies Used</h2>
        <p>
          The main goal of {project.title} is to provide users with an all-in-on
          tool to:
        </p>
        <ul>
          <li>
            <h3>Frontend</h3>
            {project.technologiesUsed.frontEnd}
          </li>
        </ul>
      </article>
    </div>
  );
}
