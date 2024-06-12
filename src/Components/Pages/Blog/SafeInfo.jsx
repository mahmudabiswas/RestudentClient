import React from "react";
import image from "../../../../public/img/ourShafe.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const SafeInfo = () => {
  return (
    <div>
      <div className="border shadow-sm my-9 w-2/3  p-10">
        <img src={image} alt="" />
        <h1 className="text-3xl my-2">Sabel Adam</h1>
        <p className="text-xl">Follow Me</p>
        <div className="flex gap-5 text-gray-500 text-xl my-2">
          <FaFacebook className="hover:text-orange-400" />
          <FaTwitter className="hover:text-orange-400" />
          <FaLinkedinIn className="hover:text-orange-400" />
          <FaInstagram className="hover:text-orange-400" />
        </div>
      </div>
    </div>
  );
};

export default SafeInfo;
