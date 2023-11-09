import BooksCategories from "./Sections/BooksCategories";
import FeaturedBook from "./Sections/FeaturedBook";
import Hero from "./Sections/Hero";
import Testimonial from "./Sections/Testimonial";

const Home = () => {
   return (
      <div className="bg-white dark:bg-theme-dark">
         <Hero></Hero>
         <BooksCategories></BooksCategories>
         <FeaturedBook></FeaturedBook>
         <Testimonial></Testimonial>
      </div>

   );
};

export default Home;