import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../../assets/images/img-01.jpg";
import img2 from "../../../assets/images/img-02.jpg";
import img3 from "../../../assets/images/img-03.jpg";
import user1 from "../../../assets/images/user-1.jpg";
import user2 from "../../../assets/images/user-2.jpg";
import Ratings from "../../Shared/Ratings/Ratings";
const Testimonial = () => {
  return (
    <div className="dark:bg-theme-dark py-20 max-w-5xl mx-auto">
      <SectionTitle
        title={"Book Lovers"}
        subTitle={"Read what people say about our library and books"}
      ></SectionTitle>
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="flex flex-col md:flex-row p-7 gap-6  bg-[#f7f7f7] dark:bg-theme-dark-top">
          <div className="flex justify-center">
            <img className="md:w-[350px] w-[200px] h-full object-cover" src={img1} alt="" />
          </div>
          <div className="flex flex-col justify-center w-full">
            <div>
              <div className="flex justify-between ">
                <h2 className="text-xl mb-3 md:text-3xl text-theme-black dark:text-white">
                  Adventures in the Kitchen
                </h2>
                <div className="text-xl">
                  <Ratings ratingNumber={5}></Ratings>
                </div>
              </div>
              <p className="capitalize font-bold text-xl dark:text-white">
                By: James Turner
              </p>
            </div>
            <div className="mt-5 bg-[#fff] dark:bg-theme-dark shadow p-5 rounded-lg ">
              <div>
                <img
                  className="w-[70px] rounded-full h-[70px] object-cover"
                  src={user1}
                  alt=""
                />
              </div>
              <p className="text-lg font-bold dark:text-white">
                Sakib Al Hasan
              </p>
              <p className="text-md font-bold dark:text-white mt-4">
                Adventures in the Kitchen is an absolute culinary masterpiece.
                The author descriptions transport you into a world of delectable
                flavors and fragrant aromas. This book is not just a collection
                of recipes; Whether you are an experienced chef or a kitchen
                newbie, this book will ignite your passion for cooking and leave
                you hungry for more. A must-read for food enthusiasts and
                storytellers alike!
              </p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex  p-7 gap-6  bg-[#f7f7f7] dark:bg-theme-dark-top">
          <div  className="flex justify-center">
            <img className="md:w-[350px] w-[200px]  h-full object-cover" src={img2} alt="" />
          </div>
          <div className="flex flex-col justify-center w-full">
            <div>
              <div className="flex justify-between">
                <h2 className="text-xl mb-3  md:text-3xl text-theme-black dark:text-white">
                The Science of Wonder
                </h2>
                <div className="text-xl">
                  <Ratings ratingNumber={5}></Ratings>
                </div>
              </div>
              <p className="capitalize font-bold text-xl dark:text-white">
                By: Olivia Roberts
              </p>
            </div>
            <div className="mt-5 bg-[#fff] dark:bg-theme-dark shadow p-5 rounded-lg ">
              <div>
                <img
                  className="w-[70px] rounded-full h-[70px] object-cover"
                  src={user2}
                  alt=""
                />
              </div>
              <p className="text-lg font-bold dark:text-white">
                Adnan Sakib
              </p>
              <p className="text-md font-bold dark:text-white  mt-4">
              The Science of Wonder is a captivating journey into the mysteries of the natural world. Explore the realms of physics, biology, and astronomy to unravel the secrets that make our universe truly wondrous.
              </p>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex p-7 gap-6 bg-[#f7f7f7] dark:bg-theme-dark-top">
          <div  className="flex justify-center">
            <img className="md:w-[350px] w-[200px]  h-full object-cover" src={img3} alt="" />
          </div>
          <div className="flex flex-col justify-center w-full">
            <div>
              <div className="flex justify-between">
                <h2 className="text-xl mb-3 md:text-3xl text-theme-black dark:text-white">
                Discovering the Universe
                </h2>
                <div className="text-xl">
                  <Ratings ratingNumber={5}></Ratings>
                </div>
              </div>
              <p className="capitalize font-bold text-xl dark:text-white">
                By: Sophie Williams
              </p>
            </div>
            <div className="mt-5 bg-[#fff] dark:bg-theme-dark shadow p-5 rounded-lg ">
              <div>
                <img
                  className="w-[70px] rounded-full h-[70px] object-cover"
                  src={user1}
                  alt=""
                />
              </div>
              <p className="text-lg font-bold dark:text-white">
                Maruf Khan
              </p>
              <p className="text-md font-bold dark:text-white  mt-4">
              Discovering the Universe is an awe-inspiring exploration of the cosmos. Uncover the mysteries of the universe, from the birth of stars to the search for extraterrestrial life.
              </p>
            </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Testimonial;
