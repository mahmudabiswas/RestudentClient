import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// css
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../../../public/img/marry.jpg";
import img2 from "../../../../public/img/jerry.jpg";
import img3 from "../../../../public/img/catty].jpg";
const FebackSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={2}
        navigation={{ clickable: true }}
      >
        <SwiperSlide>
          <div
            className="relative border w-full shadow-lg lg:w-2/3 h-[400px]
          bg-gray-200 m-auto p-12"
          >
            <img
              src={img1}
              alt=""
              className=" w-[100px]
             m-auto rounded-full"
            />
            <div className="absolute  text-center">
              <h1 className="text-2xl Pacifico ">Marry Revier</h1>
              <h1 className="text-xl my-5 text-lime-900  ">Chef Leader</h1>
              <p className="-bottom-1/4 my-5">
                Progressively strategize compelling metrics whereas impactful
                architectures. Rapidiously fabricate multifunctional customer ”
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative border w-full shadow-lg lg:w-2/3 h-[400px]
          bg-gray-200 m-auto p-12"
          >
            <img
              src={img2}
              alt=""
              className=" w-[100px]
             m-auto rounded-full"
            />
            <div className="absolute text-center">
              <h1 className="text-2xl Pacifico ">Charli Chain</h1>
              <h1 className="text-xl my-5 text-lime-900  ">Chef Leader</h1>
              <p className="-bottom-1/4 my-5">
                Progressively strategize compelling metrics whereas impactful
                architectures. Rapidiously fabricate multifunctional customer ”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative border w-full shadow-lg lg:w-2/3 h-[400px]
          bg-gray-200 m-auto p-12"
          >
            <img
              src={img3}
              alt=""
              className=" w-[100px]
             m-auto rounded-full"
            />
            <div className="absolute text-center">
              <h1 className="text-2xl Pacifico ">Jarry River</h1>
              <h1 className="text-xl my-5 text-lime-900  ">Chef Leader</h1>
              <p className="-bottom-1/4 my-5">
                Progressively strategize compelling metrics whereas impactful
                architectures. Rapidiously fabricate multifunctional customer ”
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FebackSlider;
