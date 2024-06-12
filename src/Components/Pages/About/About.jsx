import React from "react";

import AboutUs from "./AboutUs";
import AboutCount from "./AboutCount";
import Fetback from "./fetback";
const About = () => {
  return (
    <div>
      <h1 className="text-6xl text-center text-orange-400">
        <span className="text-9xl text-red-700">A</span> bout Us{" "}
      </h1>
      <div>
        <AboutUs />
        <AboutCount />
        <Fetback />
      </div>
    </div>
  );
};

export default About;
