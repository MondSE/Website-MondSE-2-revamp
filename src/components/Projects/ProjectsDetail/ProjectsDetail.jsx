"use client"; // Ensure this is a Client Component
import Head from "next/head";
import { useParams } from "next/navigation";

const data = [
  {
    id: 1,
    header: "ACTDO",
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
    header: "ACtdo",
    title: "ACTDO Mangement Information System",
    techStack: ["html", "css", "js", "MySql"],
    githubLink: "/",
    projectSummary: "explain ko muna",
    sampleImageProject: ["none", "none", "none", "none"],
    aim: ["none", "none", "none"],
    technologiesUsed: [
      {
        frontEnd: "asasdasdccc",
        backEnd: "asdasdasdccc",
        dataBase: "asdasdasdcccc",
      },
    ],
    dataBaseDiagram: "image",
    implementation: [
      {
        frontEnd: ["asasdasdccccc", "asasdasd", "asasdasd"],
        backEnd: ["asdasdasdcccc", "asasdasd", "asasdasd"],
        dataBase: ["asdasdasdcccc", "asasdasd", "asasdasd"],
      },
    ],
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
    <>
      <Head>
        <title>Almond Tuazon - {project.header}</title>
      </Head>
      <main>
        <div className=" contianer px-4 pt-20 lg:pt-32 mx-auto max-w-screen-lg">
          <h1 className=" text-3xl lg:text-5xl mb-5 font-bold">
            {project.title}
          </h1>
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
              The main goal of {project.title} is to provide users with an
              all-in-on tool to:
            </p>
            <ul>
              {project.aim.map((aims, index) => (
                <li key={index}>{aims}</li>
              ))}
            </ul>
            {/* Objective */}
            <h2 id="Objective">Technologies Used</h2>
            <p>
              The main goal of {project.title} is to provide users with an
              all-in-on tool to:
            </p>
            <ul>
              <li>
                <h3 className="inline font-semibold">Frontend: </h3>
                <span>
                  {project.technologiesUsed?.[0]?.frontEnd || "Not specified"}
                </span>
              </li>
              <li>
                <h3 className="inline font-semibold">Backend: </h3>
                <span>
                  {project.technologiesUsed?.[0]?.backEnd || "Not specified"}
                </span>
              </li>
              <li>
                <h3 className="inline font-semibold">Database: </h3>
                <span>
                  {project.technologiesUsed?.[0]?.dataBase || "Not specified"}
                </span>
              </li>
            </ul>
            <h2 id="resumen-del-proyecto">Database Design</h2>
            {/* data diagram image */}
            <h2 id="resumen-del-proyecto">implementation</h2>
            <div className="mb-5">
              <h3 className="font-semibold">Frontend:</h3>
              <ul className="list-disc list-inside ml-4">
                {project.implementation?.[0]?.frontEnd?.map((item, index) => (
                  <li key={index}>{item}</li>
                )) || <li>Not specified</li>}
              </ul>
            </div>
            <div className="mb-5">
              <h3 className="font-semibold">Backend:</h3>
              <ul className="list-disc list-inside ml-4">
                {project.implementation?.[0]?.backEnd?.map((item, index) => (
                  <li key={index}>{item}</li>
                )) || <li>Not specified</li>}
              </ul>
            </div>
            <div className="mb-5">
              <h3 className="font-semibold">Database:</h3>
              <ul className="list-disc list-inside ml-4">
                {project.implementation?.[0]?.dataBase?.map((item, index) => (
                  <li key={index}>{item}</li>
                )) || <li>Not specified</li>}
              </ul>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
