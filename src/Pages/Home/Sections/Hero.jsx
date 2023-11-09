import { Link } from "react-router-dom";
import hero from "../../../assets/images/hero.jpg"
const Hero = () => {
   return (
      <div className="relative h-[700px] overflow-hidden">
        <img className="h-full w-full object-cover" src={hero} alt="" />
        <div className="w-full h-full bg-theme-black absolute left-0 top-0 opacity-50"></div>
        <div className="absolute left-1/2 -translate-x-1/2 text-center -translate-y-1/2  top-1/2 text-white w-3/4 lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl">More Than 458,948 Book Over Here</h1>
          <div className="flex flex-col lg:flex-row  lg:gap-5 gap-3 justify-center mt-9">
            <Link to="/register">
            <button
              className="btn rounded-full bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-xl font-bold text-white px-6"
            >
              Register Today
            </button>
            </Link>
            <Link to="/">
            <button
              className="btn rounded-full bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-xl font-bold text-white px-6"
            >
              Borrow Books
            </button></Link>
            
          </div>
        </div>

      </div>
   );
};

export default Hero;
