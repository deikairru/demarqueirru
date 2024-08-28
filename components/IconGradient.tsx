import React from "react";

const IconGradient = () => {
  return (
    <svg className="size-0 absolute text-sky-500">
      <linearGradient id="icon-violet-sky">
        <stop offset={"0%"} stopColor="#7c3aed" />
        <stop offset={"25%"} stopColor="rgb(124 58 237)" />
        <stop offset={"100%"} stopColor="#0ea5e9" />
      </linearGradient>
    </svg>
  );
};

export default IconGradient;
