import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BookCard from "../Shared/BookCard/BookCard";
import { AuthContext } from "../../Provider/AuthProvider";

const AllBooks = () => {
  const [loadedBooks, setLoadedBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("https://b8a11-server-side-merndevreza.vercel.app/books")
      .then((res) => {
        setLoadedBooks(res.data);
        setBooks(res.data);
      });
  }, []);
  useEffect(() => {
    const loggedUser = { email: currentUser?.email };
    //if user exist
    if (currentUser) {
      axios
        .post("https://b8a11-server-side-merndevreza.vercel.app/jwt", loggedUser, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }else{
      // if user logged out, the token will be removed
      axios.post("https://b8a11-server-side-merndevreza.vercel.app/log-out",loggedUser,{withCredentials:true}).then((res) => {
        console.log(res.data);
      })
      .catch(error=>{
        console.log(error);
      })
    }
  }, []);
  let availableBooks = [];
  let stockOutBooks = [];
  for (const item of loadedBooks) {
    if (item.quantity >0) {
      availableBooks.push(item);
    } else {
      stockOutBooks.push(item);
    }
  }
  const handleAll = () => {
    setBooks(loadedBooks);
  };
  const handleAvailable = () => {
    setBooks(availableBooks);
  };
  const handleStockOut = () => {
    setBooks(stockOutBooks);
  };

  return (
    <div className="dark:bg-theme-dark bg-theme-light py-[80px] px-2">
      <div className=" container mx-auto">
        <div>
          <h3 className="text-4xl lg:text-5xl dark:text-white">Filter</h3>
          <div className="border-b-2 border-theme-black dark:border-white mb-10 py-5">
            <button
              onClick={handleAll}
              className="btn rounded-full bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-xl font-bold text-white px-6"
            >
              All
            </button>
            <button
              onClick={handleAvailable}
              className="btn rounded-full bg-theme-golden border-none hover:bg-theme-black ml-5 dark:hover:bg-white dark:hover:text-theme-golden text-xl font-bold text-white  px-6"
            >
              Available
            </button>
            <button
              onClick={handleStockOut}
              className="btn rounded-full bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-xl ml-5 font-bold text-white px-6"
            >
              Out of Stock
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-5 xl:gap-8 ">
          {books.map((book) => (
            <BookCard
              btnName={"Update"}
              btnLink={"update-book"}
              key={book._id}
              book={book}
            ></BookCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
