import React from "react";
import CustomHeader from "../../Hooks/CustomHeader";
import top from "../../../../public/img/top.png";
import FebackSlider from "./FebackSlider";

const Fetback = () => {
  return (
    <div>
      <CustomHeader title={"Corporate Applications"} />
      <CustomHeader heading={"Client’s Feedback"} />
      <div className="md:w-1/5 w-1/2 m-auto md:m-auto">
        {" "}
        <img src={top} alt="" />
      </div>
      <div className="my-12">
        {" "}
        <FebackSlider />
      </div>
    </div>
  );
};

export default Fetback;
