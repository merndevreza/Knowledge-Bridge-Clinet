import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import PropTypes from "prop-types";

const Ratings = ({ratingNumber}) => {

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
      <div className="flex text-theme-hover-golden">
         {countStars(ratingNumber)}
      </div>
   );
};
Ratings.propTypes={
   ratingNumber:PropTypes.number
}
export default Ratings;