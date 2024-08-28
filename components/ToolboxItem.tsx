import React from "react";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";

type ToolboxItemProps = {
  items: {
    title: string;
    icon: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClass?: string;
};

const ToolboxItem = ({
  items,
  className,
  itemsWrapperClass,
}: ToolboxItemProps) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClass
        )}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.icon} />
            <span className="font-semibold text-violet-sky">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItem;
