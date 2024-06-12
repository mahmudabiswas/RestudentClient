import React from "react";
import FooterAbout from "./FooterAbout";
import FooterLatesFood from "./FooterLatesFood";
import FooterFoodMenu from "./FooterFoodMenu";

const Footer = () => {
  return (
    <div>
      <div className="footer w-full h-auto  lg:h-[450px] object-cover  relative py-10 px-7 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 items-center lg:mx-10">
          <FooterAbout />
          <FooterFoodMenu />
          <FooterLatesFood />
        </div>
      </div>
    </div>
  );
};

export default Footer;
