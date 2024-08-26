import React from "react";
import Card from "./Card";

const CardReview = () => {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-violet-sky"></div>
          <div className="flex flex-col">
            <span className="font-medium text-lg">John Doe</span>
            <span className="text-sm text-slate-400">CEO at Company</span>
          </div>
        </div>
        <p className="text-slate-400 line-clamp-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          diam id bibendum lobortis, turpis sapien eleifend odio, quis dictum
          libero velit vitae sem. Sed consectetur, diam id bibendum lobortis,
          turpis sapien eleifend odio, quis dictum libero velit vitae sem.
        </p>
      </div>
    </Card>
  );
};

export default CardReview;
