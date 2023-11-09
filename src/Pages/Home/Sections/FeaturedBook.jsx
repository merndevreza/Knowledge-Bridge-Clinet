import { Link } from "react-router-dom";
import featuredBook from "../../../assets/images/featured-book.png"
import Ratings from "../../Shared/Ratings/Ratings";
const FeaturedBook = () => {
   return (
      <div className="my-14 bg-[#f7f7f7] dark:bg-theme-dark-top ">
         <div className="flex gap-10 container mx-auto">
         <div>
            <img className="h-[120%] relative -top-[9%]" src={featuredBook} alt="book" />
         </div>
         <div className="flex justify-center flex-col py-4">
            <h3 className="text-2xl lg:text-4xl xl:text-5xl dark:text-white text-theme-golden">Mastering on Green Flat Design</h3>
            <p className="text-xl my-3 dark:text-white ">By: Farrah Whisenhunt</p>
            <Ratings ratingNumber={"5"}></Ratings>
        <Link to={"/details/6549b07f51861e80cd623b0d"}><button className="btn px-6 rounded-none bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-xl mt-7 font-bold text-white">Read Now
        </button></Link>
         </div>
      </div>
      </div>
   );
};

export default FeaturedBook;