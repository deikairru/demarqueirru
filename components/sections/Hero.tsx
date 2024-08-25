"use client";

import Image from "next/image";
import React, { useState } from "react";
import ExploreIcon from "../icons/ExploreIcon";
const Hero = () => {
  const [color, setColor] = useState("fff");

  return (
    <section className="hero h-full pb-20 md:pb-32 xl:pb-0">
      <div className="mx-[10%] xl:mx-0 xl:ml-[10%] lg:items-center flex flex-col justify-center xl:flex-row">
        <div className="flex flex-col z-10 gap-4 max-w-screen-md overflow-hidden text-center xl:text-start">
          <div className="max-w-fit mx-auto xl:mx-0">
            <h2 className="mt-40 xl:mt-0 text-xl md:text-3xl font-medium text-violet-sky">
              Deikairru
            </h2>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold md:max-w-screen-md leading-slug">
            Passionate Frontend{" "}
            <span className="text-violet-sky relative">
              Developer <span className="glow-violet-sky">Developer </span>
            </span>{" "}
            and Creative UI/UX
            <span className="text-violet-sky relative">
              Designer
              <span className="glow-violet-sky">Designer </span>
            </span>
          </h1>
          <p className="text-slate-400 max-w-[500px] mx-auto xl:mx-0">
            Creating modern, elegant, and responsive design to enhance
            interactivity and engaging user experience. Converting the design to
            seamless and clean apps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center xl:justify-start">
            <button className="button-white font-medium flex flex-row gap-2 justify-center items-center text-xl [&>*:first-child]:hover:animate-spin sm:hover:scale-105 sm:origin-bottom-left duration-300">
              <Image
                src="/icons/explore.svg"
                alt="handshake icon"
                width={20}
                height={20}
              />
              <span>Explore Works</span>
            </button>
            <button className="button bg-violet-sky border-2 flex flex-row gap-2 justify-center items-center font-medium text-xl [&>*:first-child]:hover:animate-wiggle sm:hover:scale-105 sm:origin-bottom-right duration-300">
              <Image
                src="/icons/handshake.svg"
                alt="handshake icon"
                width={20}
                height={20}
                className="rotate-12"
              />
              <span>Lets Connect</span>
            </button>
          </div>
        </div>

        <Image
          src="/icons/heroIcon.svg"
          alt="hero icon"
          width={650}
          height={650}
          className="hidden xl:block mt-32 -translate-y-16 select-none"
        />
      </div>
    </section>
  );
};

export default Hero;
