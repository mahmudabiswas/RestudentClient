import React from "react";

const Food = ({ food }) => {
  const { name, recipe, image, category, price } = food;
  return (
    <div className="">
      <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden p-4">
        <p class="text-gray-500 py-2 text-2xl Pacifico font-semibold mt-2">
          {name}
        </p>
        <img
          src={image}
          className="w-full h-48 object-cover hover:scale-105"
          alt=""
        />
        <div class="p-6 text-center">
          <h2 class="text-xl uppercase letter font-semibold text-gray-800">
            {category}
          </h2>
          <p class="text-red-600 text-xl my-4 border shadow-lg py-2">
            {" "}
            Price : $29.99
          </p>
          <button className="btn bg-red-500 w-full text-white px-5 hover:bg-red-800">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
