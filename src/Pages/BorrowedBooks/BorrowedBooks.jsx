import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const { currentUser } = useContext(AuthContext);
  const [loadedBorrowedBooks, setLoadedBorrowedBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://b8a11-server-side-merndevreza.vercel.app/borrowed-books/${currentUser.email}`)
      .then((res) => {
        setLoadedBorrowedBooks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentUser]);

  const handleReturnNow = (id) => {
    axios
      .delete(`https://b8a11-server-side-merndevreza.vercel.app/borrowed-books/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Congrats!!",
            text: "You Deleted successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
          axios
          .get(`https://b8a11-server-side-merndevreza.vercel.app/borrowed-books/${currentUser.email}`)
          .then((res) => {
            setLoadedBorrowedBooks(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="dark:bg-theme-dark bg-white px-2 py-[100px]">
      <div className="max-w-3xl mx-auto flex flex-col gap-5">
        {loadedBorrowedBooks.map((item) => (
          <div
            key={item._id}
            className="flex p-4 border-2 gap-4 dark:border-[#c0c0c0]"
          >
            <div>
              <img className="w-[200px]" src={item.book.photo} alt="" />
            </div>
            <div className="flex flex-col justify-center w-full">
              <div>
                <h2 className="text-xl md:text-3xl text-theme-golden">
                  {item.book.bookName}
                </h2>
                <p className="capitalize font-bold text-xl dark:text-white">
                  Category: {item.book.category}
                </p>
              </div>
              <div className="mt-5">
                <p className="text-lg font-bold dark:text-white">
                  Borrowed Date: {item.borrowedDate}
                </p>
                <p className="text-lg font-bold text-theme-golden">
                  Return Date: {item.returnDate}
                </p>
              </div>
              <div className="mt-5 text-end">
                <button
                  onClick={() => handleReturnNow(item._id)}
                  className="btn rounded-full bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-lg font-bold text-white px-6"
                >
                  Return Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
