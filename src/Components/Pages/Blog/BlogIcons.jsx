import React from "react";
import { FaEye } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

const BlogIcons = () => {
  return (
    <div className=" text-xl font-bold cursor-pointer my-5 justify-center item-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex items-center gap-2 hover:text-red-400 ">
        <FaEye />
        <span>1490 Views</span>
      </div>
      <div className="flex items-center gap-2 hover:text-red-400 ">
        <IoChatbubblesOutline />
        <span>3 Comments</span>
      </div>
      <div className="flex items-center gap-2 hover:text-red-400 ">
        <MdDateRange />
        <span>January 14, 2021</span>
      </div>
    </div>
  );
};

export default BlogIcons;
