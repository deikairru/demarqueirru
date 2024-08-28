import React from "react";
import IconGradient from "./IconGradient";

type TechIconProps = {
  component: React.ElementType;
};

const TechIcon = ({ component }: TechIconProps) => {
  const Component = component;

  return (
    <>
      <Component className="size-10 fill-[url(#icon-violet-sky)]" />
      <IconGradient />
    </>
  );
};

export default TechIcon;
