import React from "react";
import StarIcon from "@/components/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Responsive",
  "Intuitive",
  "Dynamic",
  "Optimized",
  "Elegant",
  "Modern",
  "Efficient",
  "Innovative",
  "Creative",
  "Functional",
  "Robust",
  "Versatile",
  "User Friendly",
  "Unique",
  "Scalable",
  "Usable",
  "Search Optimize",
  "Maintanable",
];
const Tape = () => {
  return (
    <section id="tape" className="py-16 lg:py-24 overflow-clip">
      <div className="bg-violet-sky overflow-x-clip -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-4">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="uppercase text-gray-900 font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tape;
