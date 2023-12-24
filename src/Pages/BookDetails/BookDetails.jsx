import { Link, useLoaderData } from "react-router-dom";
import Ratings from "../Shared/Ratings/Ratings";
import { AiFillStar, AiTwotoneHeart } from "react-icons/ai";
import { IoBookSharp } from "react-icons/io5";
import { RiTwitterXFill, RiFacebookFill } from "react-icons/ri";
import { BiLogoLinkedin } from "react-icons/bi";
import {
  BsFillCalendarDateFill,
  BsFillEnvelopeHeartFill,
} from "react-icons/bs";
import "./BookDetails.css";
import author from "../../assets/images/author.png";
import logo from "../../assets/images/logo/logo-1.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

//==========
//component
//==========
const BookDetails = () => {
  const { currentUser } = useContext(AuthContext);
  const loadedBook = useLoaderData();
  const {
    _id,
    bookName,
    authorName,
    photo,
    category,
    rating,
    quantity,
    shortDescription,
  } = loadedBook;

  const [availableQuantity, setAvailableQuantity]=useState(quantity)

  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate();
  const currentDate = year + "-" + month + "-" + day;

  const handleBorrowBook = (e) => {
    const form = e.target;
    const returnDate = form.date.value;
    const borrowedBook = {
      book: loadedBook,
      userName: currentUser.displayName,
      userEmail: currentUser.email,
      borrowedDate:currentDate,
      returnDate,
    };
    axios
      .post("https://b8a11-server-side-merndevreza.vercel.app/borrowed-books", borrowedBook)
      .then((res) => {
        setAvailableQuantity(availableQuantity - 1);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Congrats!!",
            text: "Successfully added a book",
            icon: "success",
            confirmButtonText: "OK",
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
      const updateBookQuantity={
        bookName, authorName, photo, category, rating,
        quantity: availableQuantity
      }
      axios.patch(`https://b8a11-server-side-merndevreza.vercel.app/books/${_id}`,updateBookQuantity)
      .then(res=>{
        console.log(res.data);
      })
      .catch(error=>{
        console.log(error);
      })
    
  };
  //handle pre booking 
  const handlePreBooking=(e)=>{
    const form = e.target;
    const userEmail=form.email.value;
    const preBookingInfo={
      book: loadedBook,
      userEmail,
      userName: currentUser.displayName,
    }
    axios
      .post("https://b8a11-server-side-merndevreza.vercel.app/pre-bookings", preBookingInfo)
      .then(res=>{
        if (res.data.insertedId) {
          Swal.fire({
            title: "Congrats!!",
            text: "Successfully booked for this book",
            icon: "success",
            confirmButtonText: "OK",
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

  }
  //UPDATE AFTER BORROW A BOOK
//   const [isBorrowed, setIsBorrowed]= useState(false)
//   const [userBorrowedBooks, setUserBorrowedBooks]=useState([])
//   useEffect(()=>{
//     axios.get(`https://b8a11-server-side-merndevreza.vercel.app/borrowed-books/${currentUser.email}`)
//     .then(res=>{
//       setUserBorrowedBooks(res.data)
//     })
//     .catch(error=>{
//       console.log(error.message);
//     })
//   },[availableQuantity,currentUser.email])
// console.log(userBorrowedBooks);
  return (
    <div className="dark:bg-theme-dark bg-white px-2 ">
      <div className="max-w-7xl mx-auto py-[100px] flex flex-col md:flex-row gap-7">
        <div className="w-full md:w-1/2">
          <Link to="/" className="book-container">
            <div className="book">
              <img alt="" src={photo} />
            </div>
          </Link>
          <div className="mt-24">
            {
              availableQuantity <1 ? 
              <div><button
              disabled 
                  className="btn w-full rounded-full bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-xl font-bold text-theme-golden mb-5 px-6"
                >
                  Borrow Now
                </button> 
          <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn w-full rounded-full bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-xl font-bold text-white mb-5 px-6"
            >
              Pre booking
            </button></div>:<button
              
                  onClick={() => document.getElementById("my_modal_4").showModal()}
                  className="btn w-full rounded-full bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-xl font-bold text-white mb-5 px-6"
                >
                  Borrow Now
                </button> 
            }
            <Link to={`/read/${_id}`}>
              <button className="btn w-full rounded-full bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-xl font-bold text-white px-6">
                Start Reading
              </button>
            </Link>
          </div>
          <div>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box max-w-3xl text-center">
                <div className="mb-4">
                  <img className="w-[150px] mx-auto" src={logo} alt="" />
                </div>
                <h3 className="font-bold text-3xl">
                  Wants to borrow this book ?
                </h3>
                <div className="modal-action block">
                  <form
                    onSubmit={handleBorrowBook}
                    className="flex justify-start flex-col "
                    method="dialog"
                  >
                    <label
                      className="text-xl font-bold text-theme-golden"
                      htmlFor="date"
                    >
                      Select Return Date:
                    </label>
                    <input
                      className="bg-[#fce7b2] rounded-full w-1/2 mb-4 mx-auto py-4 px-2"
                      type="date"
                      name="date"
                      id="date"
                    />
                    <p>
                      <input
                        className="btn  rounded-full bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-xl font-bold text-white px-6"
                        type="submit"
                        value="Submit"
                      />
                    </p>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          <div>
            <dialog id="my_modal_5" className="modal">
              <div className="modal-box max-w-3xl text-center">
                <div className="mb-4">
                  <img className="w-[150px] mx-auto" src={logo} alt="" />
                </div>
                <h3 className="font-bold text-3xl">
                  Pre-Booking
                </h3>
                <p>We will send an email when this book will be available</p>
                <div className="modal-action block">
                  <form 
                  onSubmit={handlePreBooking}
                    className="flex justify-start flex-col "
                    method="dialog"
                  >
                    <label
                      className="text-xl font-bold text-theme-golden"
                      htmlFor="email"
                    >
                      Your Email:
                    </label>
                    <input
                    defaultValue={currentUser.email}
                      className="bg-[#fce7b2] text-theme-black text-center rounded-full w-1/2 mb-4 mx-auto py-4 px-2"
                      type="email"
                      name="email"
                      id="email"
                    />
                    <div>
                    <input
                        className="btn  rounded-full bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-xl font-bold text-white px-6"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div className="w-full">
          <div className="border-b-2 border-[#acabab] mb-6 pb-2 flex justify-between">
            <p className="text-xl dark:text-white text-[#4d4d4d] uppercase font-bold ">
              {category}
            </p>
            <strong className="flex items-center gap-2 text-lg text-white bg-theme-black px-3 py-1 rounded-full">
              Available: {availableQuantity}
            </strong>
          </div>

          <h2 className="text-3xl font-bold text-theme-golden">{bookName}</h2>
          <div className="my-2 text-xl">
            <Ratings ratingNumber={rating}></Ratings>
          </div>
          <h3 className="text-xl dark:text-white ">
            Author: <span className="text-theme-golden">{authorName}</span>
          </h3>
          <p className="mt-6 text-lg dark:text-white ">{shortDescription}</p>
          <div className="mt-20">
            <p className="text-xl text-[#4d4d4d] uppercase font-bold border-b-2 border-[#acabab] mb-6 pb-2 dark:text-white ">
              Book Details
            </p>
            <div className="overflow-x-auto">
              <table className="table table-zebra border-8 border-theme-light bg-white text-base">
                <tbody>
                  <tr>
                    <th>Format:</th>
                    <td>Hardback</td>
                  </tr>
                  <tr>
                    <th>Pages:</th>
                    <td>528 pages</td>
                  </tr>
                  <tr>
                    <th>Dimensions:</th>
                    <td>153 x 234 x 43mm | 758g</td>
                  </tr>
                  <tr>
                    <th>Publication Date:</th>
                    <td>June 27, 2017</td>
                  </tr>
                  <tr>
                    <th>Publisher:</th>
                    <td>Sunshine Orlando</td>
                  </tr>
                  <tr>
                    <th>Language:</th>
                    <td>English</td>
                  </tr>
                  <tr>
                    <th>Other Fomate:</th>
                    <td>CD-Audio, Paperback, E-Book</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto ">
        <p className="text-2xl dark:text-white  text-[#4d4d4d] uppercase font-bold border-b-2 border-[#acabab] mb-6 pb-2">
          About Author
        </p>
        <div className="flex gap-8 dark:text-white ">
          <div className="flex flex-col justify-between">
            <img
              className="w-[180px] h-[180px] rounded-full object-cover object-top"
              src={author}
              alt=""
            />
            <div className=" flex justify-center gap-2">
              <Link
                className="inline-block p-2 hover:text-white hover:border-theme-golden dark:hover:border-white  rounded-full border-2 hover:bg-theme-golden text-xl"
                to="/"
              >
                <RiTwitterXFill />
              </Link>
              <Link
                className="inline-block p-2 hover:bg-theme-golden hover:text-white hover:border-theme-golden dark:hover:border-white  rounded-full border-2 text-xl"
                to="/"
              >
                <BiLogoLinkedin />
              </Link>
              <Link
                className="inline-block p-2 hover:bg-theme-golden hover:text-white hover:border-theme-golden dark:hover:border-white rounded-full border-2 text-xl "
                to="/"
              >
                <RiFacebookFill />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-theme-golden">
              {authorName}
            </h3>
            <p className="mt-2 mb-6 text-lg font-bold">
              English playwright, poet and actor
            </p>
            <ul className=" text-lg">
              <li className="flex gap-2 items-center">
                <AiFillStar /> <span>Ratings: 4.8</span>
              </li>
              <li className="flex gap-2 items-center">
                <IoBookSharp /> <span>Books: 40</span>
              </li>
              <li className="flex gap-2 items-center">
                <AiTwotoneHeart /> <span>Books sold: 3500+</span>
              </li>
            </ul>
            <ul className="text-lg mt-5">
              <li className="flex gap-2 items-center">
                <BsFillCalendarDateFill />
                <span>Author Since: June 27, 2019</span>
              </li>
              <li className="flex gap-2 items-center">
                <BsFillEnvelopeHeartFill />
                <span>Email: merndevreza@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 dark:text-white ">
          <h4 className="text-2xl border-b-2 border-[#ddd]">Short Biography</h4>
          <p className="my-5">
            {authorName} is hailed as the greatest writer in the English
            language and the world&apos;s foremost dramatist. Widely celebrated
            as England&apos;s national poet and affectionately known as the Bard
            of Avon, {authorName}&apos;s enduring legacy continues to captivate
            and inspire readers, scholars, and theatergoers alike. Born and
            raised in Stratford-upon-Avon, Warwickshire,
            {authorName}&apos;s journey from humble beginnings led to his
            remarkable contributions to literature and theater. At the age of
            18, he married Anne Hathaway, and the couple had three children.
            {authorName}&apos;s literary prowess is exemplified through his
            extensive body of work, which includes 39 plays, 154 sonnets, three
            narrative poems, and other verses. His works, encompassing a wide
            range of genres from comedy and history to tragedy and romance, have
            been translated into numerous languages and are performed more
            frequently than those of any other playwright.
            <br /> <br />
            In London, he embarked on a prosperous career as an actor, writer,
            and co-owner of the Lord Chamberlain&apos;s Men, later renamed the
            King&apos;s Men. In the final years of his life, he returned to
            Stratford, where he passed away at the age of 52. {authorName}
            &apos;s private life remains shrouded in mystery, giving rise to
            various speculations. Nonetheless, his literary brilliance endures,
            with iconic works such as Hamlet, Romeo and Juliet, Othello, King
            Lear, and Macbeth continuing to be celebrated as some of the finest
            contributions to the English language. His legacy was solidified by
            the posthumous publication of the First Folio in 1623, a definitive
            collection of his plays, accompanied by Ben Jonson&apos;s prophetic
            tribute, declaring {authorName} to be not of an age, but for all
            time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
