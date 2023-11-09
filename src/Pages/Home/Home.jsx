import BooksCategories from "./Sections/BooksCategories";
import Hero from "./Sections/Hero";

const Home = () => {
   return (
      <div className="bg-white dark:bg-theme-dark">
         <Hero></Hero>
         <BooksCategories></BooksCategories>
      </div>

   );
};

export default Home;