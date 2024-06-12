import React from "react";
import image from "../../../../public/img/chikenFri.jpg";
import BlogIcons from "./BlogIcons";
const BlogCart = () => {
  return (
    <div>
      <div class="max-w-full   bg-white shadow-lg rounded-lg overflow-hidden p-4">
        <img
          src={image}
          className="w-full h-full object-cover hover:scale-105"
          alt=""
        />
        <div class="p-6 ">
          <h2 class="text-4xl uppercase  font-semibold text-gray-800">
            Dynamically enable cutting content without efficient form
          </h2>
          <BlogIcons />

          <p className="text-xl">
            Authoritatively fabricate multidisciplinary resources with
            mission-critical schemas. Energistically productize ubiquitous value
            for excellent supply chains. Progressively expedite enterprise-wide
            networks rather than end-to-end relationships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
