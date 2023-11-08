import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import BorrowedBooksCard from "./BorrowedBooksCard";

const BorrowedBooks = () => {
  const { currentUser } = useContext(AuthContext);
  const [loadedBorrowedBooks, setLoadedBorrowedBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/borrowed-books/${currentUser.email}`)
      .then((res) => {
        setLoadedBorrowedBooks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentUser]);

  return (

   <div className="dark:bg-theme-dark bg-white px-2 py-[100px]">
       <div className="max-w-3xl mx-auto flex flex-col gap-5">
      {loadedBorrowedBooks.map((item) => (
        <BorrowedBooksCard key={item._id} item={item}></BorrowedBooksCard>
      ))}
    </div>
   </div>
  );
};

export default BorrowedBooks;
