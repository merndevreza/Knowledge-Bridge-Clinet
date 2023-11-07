import { Link } from "react-router-dom";


const Category = () => {
   return (
      <div className="flex gap-10">
         <Link to='/category/religious'>Religious</Link>
         <Link to='/category/history'>History</Link>
         <Link to='/category/biography'>Biography</Link>
      </div>
   );
};

export default Category;