import React from "react";
import actdoFrontCover from "../../assets/project/ACTDO_IMS_IMG/1.png";
import Link from "next/link";

const projects = [
  {
    title: "ACTDO MIS",
    description:
      "Angeles City Traffic Development Office - Information Management System as a Design Project to be clear there are no ACTDO valuable data exposed to upload this template.",
    techStack: ["Javascript", "Bootstrap", "PHP", "MYSQL", "XAPP"],
    imageSrc: actdoFrontCover.src,
    projectDetail: "/projects",
  },
  {
    title: "GYMCOACH",
    description:
      "A fitness management system to help trainers and trainees track progress and workouts.",
    techStack: ["React", "Tailwind", "Node.js", "MongoDB"],
    imageSrc: actdoFrontCover.src,
    projectDetail: "",
  },
  {
    title: "GYMCOACH",
    description:
      "A fitness management system to help trainers and trainees track progress and workouts.",
    techStack: ["React", "Tailwind", "Node.js", "MongoDB"],
    imageSrc: actdoFrontCover.src,
    projectDetail: "",
  },
];

const ProjectsContainer = () => {
  return (
    // project layout
    <div className=" grid grid-cols-1 gap-4 xl:gap-20 mx-2">
      {/* project data forloop*/}
      {projects.map((project, index) => (
        <div
          key={index}
          id="project"
          className="mb-20 last:mb-10 flex flex-col-reverse lg:flex-row lg:justify-between lg:gap-10 gap-5"
        >
          <div className="flex flex-col gap-3 items-start mt-2 mb-4 lg:gap-8 lg:w-[500px]">
            <h1 className="text-primary-300 text-4xl font-bold tracking-normal lg:text-5xl">
              {index + 1}. {project.title}
            </h1>
            <p className="max-w-[300px] font-light lg:text-lg mb-4">
              {project.description}
            </p>
            <div className="max-w-[300px] flex gap-2 flex-wrap">
              {project.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="py-1 px-2 rounded-md bg-accent-200 flex justify-center gap-2 items-center border text-text-100"
                >
                  <p className="capitalize text-sm">{tech}</p>
                </div>
              ))}
            </div>
          </div>
          <Link
            href={`/projects/${index + 1}`}
            rel="noopener noreferrer"
            className="block overflow-hidden"
          >
            <div className="overflow-hidden rounded-xl relative exclude-noise">
              <div className="pointer-events-none absolute p-4 bottom-4 right-4 z-20 rounded-full bg-text-100"></div>
            </div>
            <img
              src={project.imageSrc}
              alt={project.title}
              className="aspect-video object-cover transition-transform duration-500 hover:scale-105 rounded-xl w-full xl:max-w-4xl"
              width={700}
              height={400}
              decoding="async"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectsContainer;
