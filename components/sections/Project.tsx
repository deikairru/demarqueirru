import React from "react";
import { dummyProjects } from "@/utils/dummy";
import Image from "next/image";
import CheckIcon from "@/components/assets/icons/check-circle.svg";
import ArrowUpRight from "@/components/assets/icons/arrow-up-right.svg";
import grainTexture from "@/components/assets/images/grain.jpg";

const Project = () => {
  return (
    <section id="project" className="py-16 mt-20">
      <div className="mx-[10%] flex flex-col justify-center items-center">
        <p className="text-violet-sky uppercase font-semibold tracking-[0.2rem]">
          Masterclass Result
        </p>
        <h2 className="text-3xl md:text-5xl mt-6 font-semibold">
          Featured Projects
        </h2>
        <p className="text-white/60 mt-3 md:mt-4 text-center md:text-lg lg:text-xl max-w-md mx-auto">
          See how i transformed concepts into engaging and beautiful digital
          experience.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 lg:mt-32 gap-14 md:gap-20 lg:gap-28 max-w-5xl">
          {dummyProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 rounded-3xl px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainTexture.src})` }}
              />
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:flex lg:flex-col lg:pb-16">
                  <div className="inline-flex text-violet-sky font-bold uppercase text-sm tracking-widest gap-2">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl mt-2 md:mt-5 md:text-4xl font-medium">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.features.map((feature) => (
                      <li
                        key={feature.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{feature.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.url} target="_blank">
                    <button className="inline-flex gap-2 items-center justify-center bg-slate-100 h-12 w-full md:w-auto px-6 font-semibold rounded-xl mt-8 border-2 bg-transparent text-white hover:bg-violet-sky select-none">
                      <span>Visit Live Project</span>
                      <ArrowUpRight className="size-5" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={2000}
                    height={1200}
                    className="mt-8 -mb-4 md:-mb-0 rounded-t-xl border-t-2 border-x-2 border-white/25 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none select-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
