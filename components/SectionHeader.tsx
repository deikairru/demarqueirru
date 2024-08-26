import React from "react";
import { twMerge } from "tailwind-merge";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  desc: string;
  className?: string;
};

const SectionHeader = ({
  eyebrow,
  title,
  desc,
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={twMerge("flex flex-col items-center text-center", className)}
    >
      <p className="text-violet-sky uppercase font-semibold tracking-[0.2rem]">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-5xl mt-6 font-semibold">{title}</h2>
      <p className="text-white/60 mt-3 md:mt-4 md:text-lg lg:text-xl max-w-md">
        {desc}
      </p>
    </div>
  );
};

export default SectionHeader;
