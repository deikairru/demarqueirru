import React from "react";
import grainTexture from "@/components/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={twMerge(
        "bg-gray-900 rounded-3xl px-8 p-6 relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainTexture.src})` }}
      />
      {children}
    </div>
  );
};

export default Card;
