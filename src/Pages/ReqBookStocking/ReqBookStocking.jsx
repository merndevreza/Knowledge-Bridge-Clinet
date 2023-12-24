import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const ReqBookStocking = () => {
   const { currentUser } = useContext(AuthContext);

   const handleBookRequest = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const bookName = form.get("bookName");
      const authorName = form.get("authorName"); 
      const category = form.get("category"); 
      const whyShouldStock = form.get("whyShouldStock"); 
      const bookReq={
      userName: currentUser.displayName,
      userEmail: currentUser.email,
        bookName,
        authorName, 
        category, 
        whyShouldStock
      }
        axios.post("https://b8a11-server-side-merndevreza.vercel.app/request-a-book",bookReq)
        .then(res=>{ 
          if (res.data.insertedId) {
            Swal.fire({
              title: "Congrats!!",
              text: "Successfully requested for the book",
              icon: "success",
              confirmButtonText: "OK",
            });
          }
        })
        .catch(error=>{
          Swal.fire({
            title: "Error!",
            text: `${ error.message }`,
            icon: "error",
            confirmButtonText: "OK",
          });
        })
    };

   return (
      <div className="dark:bg-theme-dark bg-theme-light py-14 md:py-24 lg:py-28 px-2">
      <div className="dark:bg-theme-dark-top bg-white max-w-5xl mx-auto px-6 md:px-12 py-10 md:py-20">
        <h2 className="text-4xl mb-9 dark:text-white  text-theme-black font-semibold">
          Request A Book
        </h2>
        <form
          id="addBook"
          className="flex flex-col gap-3 text-theme-black "
            onSubmit={handleBookRequest}
        >
          <div className="mb-3 ">
            <input
              className="w-full bg-theme-light dark:bg-white  placeholder:font-normal p-2 placeholder:text-[#6c757d] border-b border-[#c9c9c9] focus:outline-none focus:border-[#615F5C]"
              type="text"
              name="bookName"
              placeholder="Book Name"
              id="bookName"
              required
            />
          </div>
          <div className="mb-3 ">
            <input
              className="w-full bg-theme-light dark:bg-white    placeholder:font-normal p-2 placeholder:text-[#6c757d] border-b border-[#c9c9c9] focus:outline-none focus:border-[#615F5C]"
              type="text"
              name="authorName"
              placeholder="Author Name"
              id="authorName"
              required
            />
          </div>
          
          <div className="flex gap-5 mb-3 ">
            <div className="w-full">
              <select
                className="w-full bg-theme-light dark:bg-white    p-2 placeholder:text-[#6c757d] border-b border-[#c9c9c9] focus:outline-none focus:border-[#615F5C]"
                name="category"
                id="category"
                required
              >
                <option>Choose category</option>
                <option value="religious">Religious</option>
                <option value="history">History</option>
                <option value="biography">Biography</option>
                <option value="business">Business</option>
                <option value="health">Health</option>
                <option value="medical">Medical</option>
                <option value="science">Science</option>
                <option value="art">Art</option>
                <option value="literature">Literature</option>
                <option value="kids">Kids</option>
                <option value="travel">Travel</option>
                <option value="cooking">Cooking</option>
                <option value="cooking">Others</option>
              </select>
            </div>
          </div>
          <div className="mb-3 ">
            <textarea
              className="w-full bg-theme-light dark:bg-white placeholder:font-normal p-2 placeholder:text-[#6c757d] border-b border-[#c9c9c9] focus:outline-none focus:border-[#615F5C]"
              name="whyShouldStock"
              id="whyShouldStock"
              cols="81"
              rows="5"
              placeholder="Why should we stock this book?"
            ></textarea>
          </div> 
          <div className="mt-3">
            <input
              className="btn border-none rounded-none bg-theme-golden hover:bg-theme-hover-golden px-12 text-[#fff] cursor-pointer text-lg  "
              type="submit"
              value="Send Request"
            />
          </div>
        </form>
      </div>
    </div>
   );
};

export default ReqBookStocking;