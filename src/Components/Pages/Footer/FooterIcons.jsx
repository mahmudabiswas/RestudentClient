import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FooterIcons = () => {
  return (
    <div className="text-white flex justify-around items-center">
      <FaFacebook className="w-[26px] h-[40px] hover:text-orange-500 duration-100" />
      <FaTwitter className="w-[26px] h-[40px] hover:text-orange-500 duration-100" />
      <FaYoutube className="w-[26px] h-[40px] hover:text-orange-500 duration-100" />
      <FaLinkedin className="w-[26px] h-[40px] hover:text-orange-500 duration-100" />
      <FaInstagram className="w-[26px] h-[40px] hover:text-orange-500 duration-100" />
    </div>
  );
};

export default FooterIcons;
