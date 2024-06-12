import React from "react";

const CustomHeader = ({ title, heading, description }) => {
  return (
    <div className="md:m-5 text-center ">
      <h2 className="Pacifico text-4xl text-red-400">{title}</h2>
      <h1 className="text-6xl font-bold">{heading}</h1>
      <p className="w-1/3 m-auto tracking-widest text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default CustomHeader;
