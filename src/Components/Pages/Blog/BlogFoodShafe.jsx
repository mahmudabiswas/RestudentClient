import React from "react";
import SafeInfo from "./SafeInfo";

const BlogFoodShafe = () => {
  return (
    <div>
      <div className="border shadow-sm w-2/3 p-10">
        <span className=" text-orange-400 flex items-center gap-2 text-3xl">
          <p className="text-border"></p> Search{" "}
        </span>
        <div className="my-5 border w-fit ">
          <input type="text" className="outline-none" />
          <button className="outline-none bg-orange-400 py-4 px-10 ">
            Search
          </button>
        </div>
      </div>
      <SafeInfo />
    </div>
  );
};

export default BlogFoodShafe;
