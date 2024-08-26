"use client";

import React from "react";
import HeroImage from "@/components/assets/icons/heroIcon.svg";
import HandIcon from "@/components/assets/icons/handshake.svg";
import ExploreIcon from "@/components/assets/icons/explore.svg";
const Hero = () => {
  return (
    <section className="hero h-screen md:h-full pb-20 md:pb-32 container">
      <div className="xl:mx-0 xl:ml-[10%] lg:items-center flex flex-col justify-center xl:flex-row">
        <div className="flex flex-col z-10 gap-4 max-w-screen-md overflow-hidden text-center xl:text-start">
          <div className="max-w-fit mx-auto xl:mx-0">
            <h2 className="mt-40 xl:mt-0 text-xl sm:text-2xl md:text-3xl font-medium text-violet-sky">
              Deikairru
            </h2>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold md:max-w-screen-md leading-slug">
            Passionate Frontend{" "}
            <span className="text-violet-sky relative">
              Developer <span className="glow-violet-sky">Developer </span>
            </span>{" "}
            and Creative UI/UX{" "}
            <span className="text-violet-sky relative">
              Designer<span className="glow-violet-sky">Designer </span>
            </span>
          </h1>
          <p className="text-slate-400 max-w-[500px] mx-auto xl:mx-0 mt-4">
            Creating modern, elegant, and responsive design to enhance
            interactivity and engaging user experience. Converting the design to
            seamless and clean apps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center xl:justify-start">
            <button className="button-white font-medium flex flex-row gap-2 justify-center items-center text-lg [&>*:first-child]:hover:animate-spin hover:bg-slate-100 hover:text-slate-700 sm:hover:scale-105 sm:origin-bottom-left duration-300">
              <ExploreIcon className="size-5" />
              <span>Explore Works</span>
            </button>
            <button className="button bg-violet-sky border-2 flex flex-row gap-2 justify-center items-center font-medium text-lg [&>*:first-child]:hover:animate-wiggle sm:hover:scale-105 sm:origin-bottom-right duration-300">
              <HandIcon alt="handshake icon" className="rotate-12 size-6" />
              <span>Lets Connect</span>
            </button>
          </div>
        </div>

        <HeroImage className="hidden xl:block mt-32 -translate-y-16 select-none" />
      </div>
    </section>
  );
};

export default Hero;
