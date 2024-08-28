import React from "react";
import grainTexture from "@/components/assets/images/grain.jpg";
import ArrowUpRight from "@/components/assets/icons/arrow-up-right.svg";

const Contact = () => {
  return (
    <section id="contact" className="pb-16 pt-12 lg:pb-20 lg:pt-24">
      <div className="container">
        <div className="bg-gradient-to-r from-violet-500 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left max-w-5xl mx-auto">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{ backgroundImage: `url(${grainTexture.src})` }}
          />
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 justify-center items-center">
            <div className="">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base font-semibold">
                Ready to bring your project to live? Let&apos;s connect and
                discuss how I can help you achieve your goals
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
