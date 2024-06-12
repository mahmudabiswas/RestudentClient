import React from "react";
import FooterIcons from "./FooterIcons";

const FooterAbout = () => {
  return (
    <div>
      <span className=" text-white font-Rufina flex items-center gap-2 text-3xl">
        <p className="text-border"></p> About Us{" "}
      </span>
      <p className="text-2xl text-gray-400 my-5">
        Energistically repurpose client-based odels <br /> rather than magnetic
        sources. Intrinsicly <br /> bcks-and-mortar ideas before.
      </p>
      <FooterIcons />
    </div>
  );
};

export default FooterAbout;
