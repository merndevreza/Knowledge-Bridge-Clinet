import PropTypes from "prop-types";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "../BookCard/BookCard.css";
import { Link } from "react-router-dom";



const BookCard = ({ book,btnName,btnLink }) => {
  const {_id, bookName, authorName, photo, category, rating } = book;
  const countStars = (rating) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      if (i < rating) {
        stars.push(<AiFillStar key={i} />);
      } else {
        stars.push(<AiOutlineStar key={i} />);
      }
    }
    return stars;
  };

  return (
    <div className="mb-5 book-card">
      <div className="book-card-img-wrapper">
        <div className="book-card-img">
        <div className="book-card-img-front">
          <img
            className="max-h-[350px] w-full object-cover object-top"
            src={photo}
            alt=""
          />
        </div>
        <div className="book-card-img-back">
         <img className="max-h-[350px] w-full object-cover object-top" src={photo} alt="" />
        </div>
        </div>
      </div>
      <div className="pt-3 ">
        <div className="flex justify-between items-center">
          <p className=" inline-block px-5 py-2 bg-[#fce7b2] text-sm font-bold rounded-full text-theme-black uppercase">
            {category}
          </p>
          <div className="flex text-theme-hover-golden">
            {countStars(rating)}
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#c6c6c6]  my-3"></div>
        <div className="min-h-[100px] flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-center dark:text-white">
            {bookName}
          </h2>
          <h3 className="text-xl text-center dark:text-white">{authorName}</h3>
        </div>
        <Link to={`/${btnLink}/${_id}`}><button className="btn w-full rounded-full bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-xl mt-5 font-bold text-white">
          {btnName}
        </button></Link>
      </div>
    </div>
  );
};
BookCard.propTypes = {
  book: PropTypes.object,
  btnName:PropTypes.string,
  btnLink:PropTypes.string
};
export default BookCard;
