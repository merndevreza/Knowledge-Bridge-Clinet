import banner1 from "../../../assets/images/banner-6.jpg"
import banner2 from "../../../assets/images/banner-5.jpg"
import banner3 from "../../../assets/images/banner-2.jpg"
import banner4 from "../../../assets/images/banner-3.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Hero = () => {
   return (
      <div>
         <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper md:h-[900px] "
      >
        <SwiperSlide >
            <img className="w-full  h-full object-cover object-center" src={banner1} alt="" />
          </SwiperSlide>
        <SwiperSlide >
            <img className="w-full  h-full object-cover object-center" src={banner2} alt="" />
          </SwiperSlide>
        <SwiperSlide >
            <img className="w-full  h-full object-cover object-center" src={banner3} alt="" />
          </SwiperSlide>
        <SwiperSlide >
            <img className="w-full  h-full object-cover object-center" src={banner4} alt="" />
          </SwiperSlide>
      </Swiper>
      </div>
   );
};

export default Hero;
