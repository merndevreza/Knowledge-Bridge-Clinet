import "../Home.css";
import img1 from "../../../assets/images/img-01.jpg";
import img2 from "../../../assets/images/img-02.jpg";
import img3 from "../../../assets/images/img-03.jpg";
import img4 from "../../../assets/images/img-04.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const BooksCategories = () => {
   const [slidesPerView, setSlidesPerView] = useState(0);

  useEffect(() => {
   setSlidesPerView(getInitialSlidesPerView)
  }, []);

  const getInitialSlidesPerView = () => {
   const screenWidth = window.innerWidth;
   if (screenWidth >= 1190) {
      return 4;
   }else if (screenWidth >= 768) {
     return 3;
   } else if (screenWidth >= 576) {
     return 2;
   } else {
     return 1;
   }
 };

  return (
    <div className="container mx-auto dark:bg-theme-dark py-20">
      <SectionTitle title={"Books Category"} subTitle={"The largest library in Dhaka houses a vast collection of over 50,000 books from around the world."}></SectionTitle>
      <Swiper
        spaceBetween={40}
        slidesPerView={slidesPerView}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[#f7f7f7] dark:bg-theme-dark-top item">
            <div className="py-8 flex justify-center card-container">
              <div className="card">
                <div className="card__face card__face--front">
                  <img src={img2} alt="" />
                </div>
                <div className="card__face card__face--back">
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
            <div className="py-5 border-t-2 border-[#ddd] text-center">
              <h2 className="text-2xl font-bold text-theme-golden mb-2 dark:text-white">
                History
              </h2>
              <p className="text-xl font-bold mb-5 dark:text-white">
                Total Books: 240
              </p>
              <Link to="/category/history">
                <button className="btn rounded-full  bg-transparent border-2 border-theme-golden hover:border-theme-golden hover:text-white hover:bg-theme-golden dark:hover:border-white dark:hover:bg-white dark:hover:text-theme-golden text-lg font-bold text-theme-black px-6 py-0.5  dark:text-white">
                  See Books
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#f7f7f7] dark:bg-theme-dark-top item">
            <div className="py-8 flex justify-center card-container">
              <div className="card">
                <div className="card__face card__face--front">
                  <img src={img3} alt="" />
                </div>
                <div className="card__face card__face--back">
                  <img src={img4} alt="" />
                </div>
              </div>
            </div>
            <div className="py-5 border-t-2 border-[#ddd] text-center">
              <h2 className="text-2xl font-bold text-theme-golden mb-2 dark:text-white">
                Business
              </h2>
              <p className="text-xl font-bold mb-5 dark:text-white">
                Total Books: 250
              </p>
              <Link to="/category/business">
                <button className="btn rounded-full  bg-transparent border-2 border-theme-golden hover:border-theme-golden hover:text-white hover:bg-theme-golden dark:hover:border-white dark:hover:bg-white dark:hover:text-theme-golden text-lg font-bold text-theme-black px-6 py-0.5  dark:text-white">
                  See Books
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#f7f7f7] dark:bg-theme-dark-top item">
            <div className="py-8 flex justify-center card-container">
              <div className="card">
                <div className="card__face card__face--front">
                  <img src={img1} alt="" />
                </div>
                <div className="card__face card__face--back">
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
            <div className="py-5 border-t-2 border-[#ddd] text-center">
              <h2 className="text-2xl font-bold text-theme-golden mb-2 dark:text-white">
                Biography
              </h2>
              <p className="text-xl font-bold mb-5 dark:text-white">
                Total Books: 340
              </p>
              <Link to="/category/biography">
                <button className="btn rounded-full  bg-transparent border-2 border-theme-golden hover:border-theme-golden hover:text-white hover:bg-theme-golden dark:hover:border-white dark:hover:bg-white dark:hover:text-theme-golden text-lg font-bold text-theme-black px-6 py-0.5  dark:text-white">
                  See Books
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#f7f7f7] dark:bg-theme-dark-top item">
            <div className="py-8 flex justify-center card-container">
              <div className="card">
                <div className="card__face card__face--front">
                  <img src={img4} alt="" />
                </div>
                <div className="card__face card__face--back">
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
            <div className="py-5 border-t-2 border-[#ddd] text-center">
              <h2 className="text-2xl font-bold text-theme-golden mb-2 dark:text-white">
                Cooking
              </h2>
              <p className="text-xl font-bold mb-5 dark:text-white">
                Total Books: 140
              </p>
              <Link to="/category/cooking">
                <button className="btn rounded-full  bg-transparent border-2 border-theme-golden hover:border-theme-golden hover:text-white hover:bg-theme-golden dark:hover:border-white dark:hover:bg-white dark:hover:text-theme-golden text-lg font-bold text-theme-black px-6 py-0.5  dark:text-white">
                  See Books
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#f7f7f7] dark:bg-theme-dark-top item">
            <div className="py-8 flex justify-center card-container">
              <div className="card">
                <div className="card__face card__face--front">
                  <img src={img2} alt="" />
                </div>
                <div className="card__face card__face--back">
                  <img src={img1} alt="" />
                </div>
              </div>
            </div>
            <div className="py-5 border-t-2 border-[#ddd] text-center">
              <h2 className="text-2xl font-bold text-theme-golden mb-2 dark:text-white">
                Science
              </h2>
              <p className="text-xl font-bold mb-5 dark:text-white">
                Total Books: 240
              </p>
              <Link to="/category/science">
                <button className="btn rounded-full  bg-transparent border-2 border-theme-golden hover:border-theme-golden hover:text-white hover:bg-theme-golden dark:hover:border-white dark:hover:bg-white dark:hover:text-theme-golden text-lg font-bold text-theme-black px-6 py-0.5  dark:text-white">
                  See Books
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#f7f7f7] dark:bg-theme-dark-top item">
            <div className="py-8 flex justify-center card-container">
              <div className="card">
                <div className="card__face card__face--front">
                  <img src={img1} alt="" />
                </div>
                <div className="card__face card__face--back">
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
            <div className="py-5 border-t-2 border-[#ddd] text-center">
              <h2 className="text-2xl font-bold text-theme-golden mb-2 dark:text-white">
                Literature
              </h2>
              <p className="text-xl font-bold mb-5 dark:text-white">
                Total Books: 240
              </p>
              <Link to="/category/literature">
                <button className="btn rounded-full  bg-transparent border-2 border-theme-golden hover:border-theme-golden hover:text-white hover:bg-theme-golden dark:hover:border-white dark:hover:bg-white dark:hover:text-theme-golden text-lg font-bold text-theme-black px-6 py-0.5  dark:text-white">
                  See Books
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BooksCategories;