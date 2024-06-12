import React, { useEffect, useState } from "react";
import top from "../../../../public/img/top.png";
import CustomHeader from "../../Hooks/CustomHeader";
import Food from "./food";
const FoodSection = () => {
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    fetch(`./foodData.json`)
      .then((res) => res.json())
      .then((data) => {
        setFoodData(data);
      });
  }, []);
  return (
    <div className="">
      <div className="my-32">
        <CustomHeader title={"this is custom component"} />
        <CustomHeader heading={"Our Food Gallery"} />
        <CustomHeader
          description={`Assertively myocardinate robust e-tailers for extensible human capital.
         
        dpropriately benchmark networks`}
        />
        <div className="md:w-1/5 w-1/2 m-auto md:m-auto">
          {" "}
          <img src={top} alt="" />
        </div>
      </div>
      <h1 className="text-center text-6xl my-4">
        {" "}
        Total Item : {foodData.length}{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-gray-300 py-10 ">
        {foodData.map((food) => (
          <Food key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodSection;
