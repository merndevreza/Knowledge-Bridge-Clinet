import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../Shared/BookCard/BookCard";

const AllBooks = () => {
   const [books,setBooks]=useState([])
   useEffect(()=>{
      axios.get("http://localhost:5000/books")
      .then(res=>{
         setBooks(res.data);
      })
   },[])
   return (
      <div className="dark:bg-theme-dark bg-theme-light py-[100px]">
         <div className="grid grid-cols-5 gap-8 container mx-auto ">
         {
            books.map(book=><BookCard key={book._id} book={book}></BookCard>)
         }
      </div>
      </div>
   );
};

export default AllBooks;