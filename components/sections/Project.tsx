import React from "react";
import { dummyProjects } from "@/utils/dummy";
import Image from "next/image";
const Project = () => {
  return (
    <section className="project mt-40">
      <div className="mx-[10%] flex flex-col gap-4 justify-center items-center">
        <p className="text-emerald-sky uppercase">Masterclass Result</p>
        <h2>Featured Projects</h2>
        <p>See how i transformed concepts into engaging digital experience.</p>
        {dummyProjects.map((project) => (
          <div key={project.title}>
            <div>
              <span>{project.title}</span>
              <span>{project.year}</span>
            </div>
            <h3>{project.title}</h3>
            <ul>
              {project.features.map((feature) => (
                <li key={feature.title}>{feature.title}</li>
              ))}
            </ul>
            <a href={project.url}>
              <button className="z-10">View Live Project</button>
            </a>
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={400}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
