import React from "react";
import { dummyProjects } from "@/utils/dummy";
import SectionHeader from "../SectionHeader";
import CardProject from "../CardProject";

const Project = () => {
  return (
    <section id="project" className="padding-section">
      <div className="container">
        <SectionHeader
          eyebrow="Masterclass Result"
          title="Featured Projects"
          desc="See how i transformed concepts into engaging and beautiful digital experience."
        />
        <div className="flex flex-col margin-header gap-14 md:gap-20 lg:gap-28 max-w-5xl mx-auto">
          {dummyProjects.map((project) => (
            <CardProject
              key={project.title}
              title={project.title}
              company={project.company}
              year={project.year}
              features={project.features}
              url={project.url}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
