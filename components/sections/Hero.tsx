"use client";

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="hero overflow-x-hidden h-full pb-20 md:pb-32 xl:pb-0">
      <div className="mx-[10%] xl:mx-0 xl:ml-[10%] lg:items-center flex flex-col justify-center xl:flex-row">
        <div className="flex flex-col z-10 gap-4 max-w-screen-md overflow-hidden text-center xl:text-start">
          <div className="flex">
            <h2 className="mt-40 xl:mt-0 text-xl md:text-3xl font-medium text-violet-sky">
              Deikairru
            </h2>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold md:max-w-screen-md leading-slug">
            Passionate Frontend{" "}
            <span className="text-violet-sky relative">
              Developer <span className="glow-violet-sky">Developer </span>
            </span>{" "}
            and Creative UI/UX{" "}
            <span className="text-violet-sky relative">
              {" "}
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
            <button className="border-2 border-slate-100 text-slate-100 py-2 px-6 rounded-full select-none font-md text-md">
              <div className="flex flex-row gap-2 justify-center">
                <Image
                  src="/icons/explore.svg"
                  alt="handshake icon"
                  width={20}
                  height={20}
                />
                <span>Explore Works</span>
              </div>
            </button>
            <button className="bg-violet-sky border-transparent py-2 px-6 rounded-full select-none">
              <div className="flex flex-row gap-2 justify-center font-md text-md">
                <Image
                  src="/icons/handshake.svg"
                  alt="handshake icon"
                  width={20}
                  height={20}
                />
                <span>Lets Connect</span>
              </div>
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
