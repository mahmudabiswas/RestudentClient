import React from "react";
import image from "../../../../public/img/aboutme.jpg";

import BlogCount from "./BlogCount";
const AboutCount = () => {
  return (
    <div>
      <div class="flex flex-col relative bg-fixed  justify-center   w-full overflow-hidden">
        <h1 class="absolute text-2xl z-10 font-bold text-black">
          <BlogCount />
        </h1>
        <div class="bg-[#000000]  bg-fixed opacity-50 w-full h-full  ">
          <img
            src={image}
            class="relative w-full h-[70vh] bg-cover bg-fixed "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCount;
