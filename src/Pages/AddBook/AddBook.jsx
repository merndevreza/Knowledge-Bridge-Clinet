import axios from "axios";
import Swal from "sweetalert2";

const AddBook = () => {
  const handleAddBook = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const bookName = form.get("bookName");
    const authorName = form.get("authorName");
    const photo = form.get("photo");
    const quantity = form.get("quantity");
    const category = form.get("category");
    const rating = form.get("rating");
    const shortDescription = form.get("shortDescription");
    const content = form.get("content");
    const book={
      bookName,
      authorName,
      photo,
      quantity,
      category,
      rating,
      shortDescription,
      content
    }
      axios.post("https://b8a11-server-side-merndevreza.vercel.app/books",book,{withCredentials:true})
      .then(res=>{
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Congrats!!",
            text: "Successfully added a book",
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
    <div>
      <div className="dark:bg-theme-dark bg-theme-light py-14 md:py-24 lg:py-28 px-2">
        <div className="dark:bg-theme-dark-top bg-white max-w-5xl mx-auto px-6 md:px-12 py-10 md:py-20">
          <h2 className="text-4xl mb-9 dark:text-white  text-theme-black font-semibold">
            Add Book
          </h2>
          <form
            id="addBook"
            className="flex flex-col gap-3 text-theme-black "
            onSubmit={handleAddBook}
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
            <div className="mb-3 ">
              <input
                className="w-full bg-theme-light dark:bg-white    placeholder:font-normal p-2 placeholder:text-[#6c757d] border-b border-[#c9c9c9] focus:outline-none focus:border-[#615F5C]"
                type="url"
                name="photo"
                placeholder="Book's Photo url"
                id="photo"
                required
              />
            </div>
            <div className="mb-3 ">
              <input
                className="w-full bg-theme-light dark:bg-white    placeholder:font-normal p-2 placeholder:text-[#6c757d] border-b border-[#c9c9c9] focus:outline-none focus:border-[#615F5C]"
                type="number"
                name="quantity"
                placeholder="Quantity"
                id="quantity"
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
                </select>
              </div>

              <div className="w-full">
                <select
                  className="w-full bg-theme-light dark:bg-white    p-2 placeholder:text-[#6c757d] border-b border-[#c9c9c9] focus:outline-none focus:border-[#615F5C]"
                  name="rating"
                  id="rating"
                  required
                >
                  <option>Ratings</option>
                  <option value="5">5 Star</option>
                  <option value="4">4 Star</option>
                  <option value="3">3 Star</option>
                  <option value="2">2 Star</option>
                  <option value="1">1 Star</option>
                </select>
              </div>
            </div>
            <div className="mb-3 ">
              <textarea
                className="w-full bg-theme-light dark:bg-white placeholder:font-normal p-2 placeholder:text-[#6c757d] border-b border-[#c9c9c9] focus:outline-none focus:border-[#615F5C]"
                name="shortDescription"
                id="shortDescription"
                cols="81"
                rows="5"
                placeholder="Short Description"
              ></textarea>
            </div>
            <div className="mb-3 ">
              <textarea
                className="w-full bg-theme-light dark:bg-white    placeholder:font-normal p-2 placeholder:text-[#6c757d] border-b border-[#c9c9c9] focus:outline-none focus:border-[#615F5C]"
                name="content"
                id="content"
                cols="81"
                rows="10"
                placeholder="Some Content of the Book..."
              ></textarea>
            </div>
            <div className="mt-3">
              <input
                className="btn border-none rounded-none bg-theme-golden hover:bg-theme-hover-golden px-12 text-[#fff] cursor-pointer text-lg  "
                type="submit"
                value="Add Book"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
