import React from "react";
import about from "../../../../public/img/about.jpg";
const AboutUs = () => {
  return (
    <div className="my-36 md:flex">
      <div className=" md:flex-1 md:relative">
        <img src={about} alt="" />
      </div>
      <div className="border md:absolute md:w-1/2 bg-white md:top-2/3 md:left-[500px] shadow-lg flex-1 md:py-24 md:px-32  text-center ">
        <p className="text-2xl Pacifico mb-5 text-red-400">Our Brave</p>
        <h1 className="md:text-6xl mb-6 font-semibold">About Us</h1>
        <p className="text-xl text-justify text-gray-500">
          Compellingly engage backend technology and 2.0 strategic theme areas.
          Distinctively simplify world-class portals through global human
          capital. Holisticly expedite multimedia based materials and end-to-end
          architectures. Continually expedite magnetic synergy without front-end
          benefits.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
