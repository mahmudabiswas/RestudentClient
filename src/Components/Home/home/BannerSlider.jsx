import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// css
import "swiper/css";
import "swiper/css/navigation";

// img;
import img1 from "../../../../public/img/bargar.jpg";
import img2 from "../../../../public/img/chili.jpg";
import img3 from "../../../../public/img/kabab.png";
import img4 from "../../../../public/img/hotBurgar.png";
import img5 from "../../../../public/img/hotChicken.png";
import img6 from "../../../../public/img/garlic.png";
import img7 from "../../../../public/img/rosun.png";

const BannerSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={img1}
              alt=""
              className="lg:w-full lg:h-[500px]  object-cover "
            />
            <div className="absolute lg:bottom-3.5 bottom-1/2 left-1/2">
              <img src={img4} alt="" className="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src={img2}
              alt=""
              className="lg:w-full lg:h-[500px] object-cover "
            />
            <div className="absolute lg:bottom-3.5 bottom-1/2 left-1/2">
              <img src={img5} alt="" className="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={img6}
              alt=""
              className="lg:w-full lg:h-[500px] w-1/2 object-cover "
            />

            <div className="absolute lg:bottom-3.5 bottom-1/2 right-0">
              <img src={img3} alt="" className="" />
            </div>
            <div className="absolute lg:bottom-3.5 bottom-1/2 ">
              <img src={img7} alt="" className="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;

{
}
