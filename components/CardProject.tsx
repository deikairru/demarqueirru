import React from "react";
import Card from "./Card";
import Image from "next/image";
import CheckIcon from "@/components/assets/icons/check-circle.svg";
import ArrowUpRight from "@/components/assets/icons/arrow-up-right.svg";

type ProjectProps = {
  title: string;
  company: string;
  year: string;
  features: {
    title: string;
  }[];
  url: string;
  image: string;
};

const CardProject = ({
  title,
  company,
  year,
  features,
  url,
  image,
}: ProjectProps) => {
  return (
    <Card
      key={title}
      className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0"
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="lg:flex lg:flex-col lg:pb-16">
          <div className="inline-flex text-violet-sky font-bold uppercase text-sm tracking-widest gap-2">
            <span>{company}</span>
            <span>&bull;</span>
            <span>{year}</span>
          </div>
          <h3 className="text-2xl mt-2 md:mt-5 md:text-4xl font-medium">
            {title}
          </h3>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <ul className="flex flex-col gap-4 mt-4 md:mt-5">
            {features.map((feature) => (
              <li
                key={feature.title}
                className="flex gap-2 text-sm md:text-base text-white/50"
              >
                <CheckIcon className="size-5 md:size-6" />
                <span>{feature.title}</span>
              </li>
            ))}
          </ul>
          <a href={url} target="_blank">
            <button className="inline-flex gap-2 items-center justify-center bg-slate-100 h-12 w-full md:w-auto px-6 font-semibold rounded-xl mt-8 border-2 bg-transparent text-white hover:bg-violet-sky select-none">
              <span>Visit Live Project</span>
              <ArrowUpRight className="size-5" />
            </button>
          </a>
        </div>
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={2000}
            height={1200}
            className="mt-8 -mb-4 md:-mb-0 rounded-t-xl border-t-2 border-x-2 border-white/25 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none select-none"
          />
        </div>
      </div>
    </Card>
  );
};

export default CardProject;
