"use client";

import { useState } from "react";
import ProjectModal from "../ProjectModal";

const projectList = [
  { id: 1, title: "Project A", description: "Summary..." },
  { id: 2, title: "Project B", description: "Summary..." },
  { id: 3, title: "Project C", description: "Summary..." },
];

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <div className="grid grid-cols-1 gap-4">
        {projectList.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelected(project.id)}
            className="border p-4 rounded shadow hover:bg-gray-50 cursor-pointer"
          >
            <h3 className="font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {selected && (
        <ProjectModal
          project={projectList.find((p) => p.id === selected)!}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
