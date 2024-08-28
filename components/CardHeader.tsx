import React from "react";
import Card from "./Card";
import StarIcon from "@/components/assets/icons/sparkle.svg";
import { twMerge } from "tailwind-merge";
import IconGradient from "./IconGradient";

type CardAboutProps = {
  title: string;
  desc: string;
  className?: string;
};

const CardHeader = ({ title, desc, className }: CardAboutProps) => {
  return (
    <div
      className={twMerge("flex flex-col md:gap-3 md:pt-8 md:px-10", className)}
    >
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 fill-[url(#icon-violet-sky)]" />
        <IconGradient />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <p className="text-sm sm:text-base text-white/60 mt-2">{desc}</p>
    </div>
  );
};

export default CardHeader;
