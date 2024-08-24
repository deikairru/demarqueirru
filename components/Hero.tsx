"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { transition } from "three/webgpu";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });

const sliderVariants: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-38%",
    transition: {
      repeat: Infinity,
      duration: 5,
      repeatType: "mirror",
      ease: "linear",
    },
  },
};
const Hero = () => {
  return (
    <section className="hero  overflow-x-hidden h-full pb-20 md:pb-32 xl:pb-0">
      <div className="mx-[10%] xl:mx-0 xl:ml-[10%] lg:items-center flex flex-col justify-center xl:flex-row">
        <div className="flex flex-col z-10 gap-4 max-w-screen-md overflow-hidden text-center xl:text-start">
          <h2 className="text-xl md:text-3xl font-medium bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Deikairru
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold md:max-w-screen-md leading-slug">
            Passionate Frontend <span className="text-gradient">Developer</span>{" "}
            and Creative UI/UX <span className="text-gradient"> Designer</span>
          </h1>
          <p className="text-slate-400 max-w-[500px] mx-auto xl:mx-0">
            Creating modern, elegant, and responsive design to enhance
            interactivity and engaging user experience. Converting the design to
            seamless and clean apps.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-8 justify-center xl:justify-start">
            <button className="border-white border-2 py-2 px-4 rounded-md">
              Explore Masterclass
            </button>
            <button className="bg-white text-slate-800 border-2 py-2 px-4 rounded-md">
              Lets Connect
            </button>
          </div>
        </div>

        <Image
          src="/icons/heroIcon.svg"
          alt="hero icon"
          width={650}
          height={650}
          className="hidden xl:block mt-32 -translate-y-16"
        />
      </div>
    </section>
  );
};

export default Hero;
