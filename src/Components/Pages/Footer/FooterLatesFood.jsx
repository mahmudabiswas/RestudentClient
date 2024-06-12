import React from "react";
import footerChiken from "../../../../public/img/footerchiken.jpg";
import FooterMan from "../../../../public/img/footerman.jpg";
import { MdDateRange } from "react-icons/md";
const FooterLatesFood = () => {
  return (
    <div className="">
      <span className=" text-white font-Rufina flex items-center gap-2 text-3xl">
        <p className="text-border"></p> Latest Posts
      </span>
      <div className="text-white my-8">
        <div className="flex item-center">
          <div>
            <img src={footerChiken} alt="" />
          </div>
          <div className="ml-8">
            <p className="text-lg">
              Dynamically enable cutting content without
            </p>
            <div className="flex items-center gap-2 hover:text-orange-400 ">
              <MdDateRange />
              <span>January 14, 2021</span>
            </div>
          </div>
        </div>
        <div className="flex item-center">
          <div>
            <img src={FooterMan} alt="" />
          </div>
          <div className="ml-8">
            <p className="text-lg">
              Dynamically enable cutting content without
            </p>
            <div className="flex items-center gap-2 hover:text-orange-400 ">
              <MdDateRange />
              <span>January 14, 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLatesFood;
