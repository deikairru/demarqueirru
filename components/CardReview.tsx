import React from "react";
import Card from "./Card";

type CardReviewProps = {
  name: string;
  position: string;
  text: string;
};

const CardReview = ({ name, position, text }: CardReviewProps) => {
  return (
    <Card className="max-w-xs md:max-w-md md:p-8 lg:px-10">
      <div title={name} className="flex gap-4 items-center">
        <div className="flex items-center gap-4">
          <div className="size-14 rounded-full bg-violet-sky inline-flex items-center justify-center font-extrabold text-2xl">
            {name[0]}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold"> {name}</span>
            <span className="text-sm text-white/40">{position}</span>
          </div>
        </div>
      </div>
      <p
        title={text}
        className="text-sm md:text-base mt-4 md:mt-6 text-white/60 line-clamp-4"
      >
        {text}
      </p>
    </Card>
  );
};

export default CardReview;
