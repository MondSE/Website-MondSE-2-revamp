"use client"; // Ensure this is a Client Component

import { useParams } from "next/navigation";

const data = [
  {
    id: 1,
    title: "ACTDO Management Information System",
    techStack: ["HTML", "CSS", "JavaScript", "MySQL"],
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
    <div>
      <h1>{project.title}</h1>
      <p>Tech Stack: {project.techStack.join(", ")}</p>
    </div>
  );
}
