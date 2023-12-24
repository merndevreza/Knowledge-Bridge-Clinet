import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import reqBook from "../../../assets/images/req-a-book.png"
import { Link } from "react-router-dom";

const ReqABook = () => {
   return (
      <div className="dark:bg-theme-dark py-20 max-w-5xl mx-auto">
        <SectionTitle
          title={"Didn't found the book ?"}
          subTitle={"Don't worry, send a request for the book. We will notify you when we will have the book."}
        ></SectionTitle>
        <div className="text-center">
           <img className="rounded-md mx-auto mb-8" src={reqBook} alt="" />
           <Link to="/req-book">
            <button
              className="btn rounded-full bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-xl font-bold text-white px-6"
            >
              Request a book
            </button>
            </Link>
        </div>

      </div>
    );
};

export default ReqABook;