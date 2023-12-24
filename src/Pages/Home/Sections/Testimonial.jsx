import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../Home.css";
import img1 from "../../../assets/images/img-01.jpg";
import img2 from "../../../assets/images/img-02.jpg";
import img3 from "../../../assets/images/img-03.jpg";
import img4 from "../../../assets/images/img-04.jpg";
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
          <div className="flex flex-col md:flex-row p-8 gap-8 rounded-md  bg-[#f7f7f7] dark:bg-theme-dark-top">
            <div className="flex justify-center items-center">
              <div className="book-container">
                <div className="book-sm">
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full">
              <div>
                <div className="flex justify-between ">
                  <h2 className="text-xl mb-3 md:text-3xl text-theme-black dark:text-white">
                    Electric Flat Design
                  </h2>
                  <div className="text-xl">
                    <Ratings ratingNumber={"5"}></Ratings>
                  </div>
                </div>
                <p className="capitalize font-bold text-xl dark:text-white -mt-2">
                  By: James Turner
                </p>
              </div>
              <div className="mt-8 bg-[#fff] dark:bg-theme-dark  p-5 rounded-lg ">
                <div>
                  <img
                    className="w-[70px] rounded-full h-[70px] object-cover"
                    src={user1}
                    alt=""
                  />
                </div>
                <p className="text-lg font-bold dark:text-white mt-1">
                  Sakib Al Hasan
                </p>
                <p className="text-md font-bold dark:text-white mt-4">
                  Adventures in the Kitchen is an absolute culinary masterpiece.
                  The author descriptions transport you into a world of
                  delectable flavors and fragrant aromas. This book is not just
                  a collection of recipes; Whether you are an experienced chef
                  or a kitchen newbie, this book will ignite your passion for
                  cooking and leave you hungry for more. A must-read for food
                  enthusiasts and storytellers alike!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row p-8 gap-8 rounded-md  bg-[#f7f7f7] dark:bg-theme-dark-top">
            <div className="flex justify-center items-center">
              <div className="book-container">
                <div className="book-sm">
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full">
              <div>
                <div className="flex justify-between ">
                  <h2 className="text-xl mb-3 md:text-3xl text-theme-black dark:text-white">
                    Social Flat Design
                  </h2>
                  <div className="text-xl">
                    <Ratings ratingNumber={"5"}></Ratings>
                  </div>
                </div>
                <p className="capitalize font-bold text-xl dark:text-white -mt-2">
                  By: James Turner
                </p>
              </div>
              <div className="mt-8 bg-[#fff] dark:bg-theme-dark  p-5 rounded-lg ">
                <div>
                  <img
                    className="w-[70px] rounded-full h-[70px] object-cover"
                    src={user2}
                    alt=""
                  />
                </div>
                <p className="text-lg font-bold dark:text-white mt-1">
                  John Doe
                </p>
                <p className="text-md font-bold dark:text-white mt-4">
                  Adventures in the Kitchen is an absolute culinary masterpiece.
                  The author descriptions transport you into a world of
                  delectable flavors and fragrant aromas. This book is not just
                  a collection of recipes; Whether you are an experienced chef
                  or a kitchen newbie, this book will ignite your passion for
                  cooking and leave you hungry for more. A must-read for food
                  enthusiasts and storytellers alike!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row p-8 gap-8 rounded-md  bg-[#f7f7f7] dark:bg-theme-dark-top">
            <div className="flex justify-center items-center">
              <div className="book-container">
                <div className="book-sm">
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full">
              <div>
                <div className="flex justify-between ">
                  <h2 className="text-xl mb-3 md:text-3xl text-theme-black dark:text-white">
                    Screen Flat Design
                  </h2>
                  <div className="text-xl">
                    <Ratings ratingNumber={"5"}></Ratings>
                  </div>
                </div>
                <p className="capitalize font-bold text-xl dark:text-white -mt-2">
                  By: James Turner
                </p>
              </div>
              <div className="mt-8 bg-[#fff] dark:bg-theme-dark  p-5 rounded-lg ">
                <div>
                  <img
                    className="w-[70px] rounded-full h-[70px] object-cover"
                    src={user1}
                    alt=""
                  />
                </div>
                <p className="text-lg font-bold dark:text-white mt-1">
                  Sakib Al Hasan
                </p>
                <p className="text-md font-bold dark:text-white mt-4">
                  Adventures in the Kitchen is an absolute culinary masterpiece.
                  The author descriptions transport you into a world of
                  delectable flavors and fragrant aromas. This book is not just
                  a collection of recipes; Whether you are an experienced chef
                  or a kitchen newbie, this book will ignite your passion for
                  cooking and leave you hungry for more. A must-read for food
                  enthusiasts and storytellers alike!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row p-8 gap-8 rounded-md  bg-[#f7f7f7] dark:bg-theme-dark-top">
            <div className="flex justify-center items-center">
              <div className="book-container">
                <div className="book-sm">
                  <img src={img4} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full">
              <div>
                <div className="flex justify-between ">
                  <h2 className="text-xl mb-3 md:text-3xl text-theme-black dark:text-white">
                    Eco Flat Design
                  </h2>
                  <div className="text-xl">
                    <Ratings ratingNumber={"5"}></Ratings>
                  </div>
                </div>
                <p className="capitalize font-bold text-xl dark:text-white -mt-2">
                  By: James Turner
                </p>
              </div>
              <div className="mt-8 bg-[#fff] dark:bg-theme-dark  p-5 rounded-lg ">
                <div>
                  <img
                    className="w-[70px] rounded-full h-[70px] object-cover"
                    src={user2}
                    alt=""
                  />
                </div>
                <p className="text-lg font-bold dark:text-white mt-1">
                  John Doe
                </p>
                <p className="text-md font-bold dark:text-white mt-4">
                  Adventures in the Kitchen is an absolute culinary masterpiece.
                  The author descriptions transport you into a world of
                  delectable flavors and fragrant aromas. This book is not just
                  a collection of recipes; Whether you are an experienced chef
                  or a kitchen newbie, this book will ignite your passion for
                  cooking and leave you hungry for more. A must-read for food
                  enthusiasts and storytellers alike!
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
