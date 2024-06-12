import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import BlogCart from "./BlogCart";
import BlogFoodShafe from "./BlogFoodShafe";

const Blog = () => {
  return (
    <div className="">
      <div className="blog w-full h-screen  lg:h-[450px] object-cover  relative ">
        <h1 className="text-center text-6xl text-white left-1/2 font-Rufina top-0 absolute overlay overlay_1">
          {" "}
          Blog
        </h1>
        <div className="border red p-5 bg-white shadow-lg rounded-lg  left-1/2 font-Rufina bottom-[-35px] absolute">
          <div className="flex items-center">
            <Link to="/">
              {" "}
              <IoHomeSharp className="mr-2 text-red-500" />
            </Link>
            <p>
              Home - <span className="font-bold">Blog</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20    my-36 items-center ">
        <BlogCart className="w-full" />
        <BlogFoodShafe />
      </div>
    </div>
  );
};

export default Blog;
