import React from "react";

const FooterFoodMenu = () => {
  return (
    <div>
      <span className=" text-white font-Rufina flex items-center gap-2 text-3xl">
        <p className="text-border"></p> Food Menu
      </span>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8">
        <div>
          <ul className="text-xl text-gray-400 my-5 ">
            <li className="my-3">White Castle</li>
            <li className="my-3">Cherry Limeade</li>
            <li className="my-3">Pumpkin Spice</li>
            <li className="my-3">Sandwich</li>
            <li className="my-3">Krispy Kreme</li>
          </ul>
        </div>
        <div>
          <ul className="text-xl text-gray-400 my-5 ">
            <li className="my-3">Beef Sandwich</li>
            <li className="my-3">Wendy’s Frosty</li>
            <li className="my-3">Burrito Supreme</li>
            <li className="my-3">Donuts Coffee</li>
            <li className="my-3">Nacho Fries</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterFoodMenu;
