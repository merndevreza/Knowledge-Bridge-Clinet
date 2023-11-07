import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo-2.png";
import { useContext, useEffect, useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { IoIosMoon } from "react-icons/io";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

//==============
// component
//==============
const Header = () => {
  //dark light toggler
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleDarkLight = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.add("light");
  }, [theme]);

  const { currentUser, logOutUser } = useContext(AuthContext);
  //mobile Menu
  const [isOpen, setIsOpen] = useState(false);
  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  //logout
  const handleLogout = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          title: "Congrats!!",
          text: `You successfully Logged in`,
          icon: "success",
          confirmButtonText: "OK",
        });
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
  //
  return (
    <div className="bg-[#04102e]">
      <header className="container mx-auto py-4 px-2 flex justify-between items-center">
        <div className="order-2 xl:order-1">
          <Link to="/">
            <img
              className="max-h-[70px] md:max-h-[80px] lg:max-h-[100px]"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <nav className="order-1 xl:order-2">
          <button
            onClick={handleMobileMenu}
            className="text-2xl border-2 p-1 text-[#fff] xl:hidden"
          >
            <RiMenuLine></RiMenuLine>
          </button>
          <ul
            className={
              isOpen
                ? "flex flex-col gap-4  text-xl font-medium font-sulphur pl-6 absolute z-30 left-0 top-0 h-screen w-1/3 bg-theme-black text-[#fff] "
                : "hidden xl:flex gap-6 text-[#fff]  text-xl font-medium font-sulphur"
            }
          >
            <div className={isOpen ? " text-right mt-4 mr-4" : "hidden"}>
              <button
                onClick={handleMobileMenu}
                className={
                  isOpen ? "text-2xl border-2 p-1 border-white" : "hidden"
                }
              >
                <AiOutlineClose></AiOutlineClose>
              </button>
            </div>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {currentUser ? (
              <li>
                <NavLink to="/all-books">All Books</NavLink>
              </li>
            ) : (
              ""
            )}
            {currentUser ? (
              <li>
                <NavLink to="/borrowed-books">Borrowed Books</NavLink>
              </li>
            ) : (
              ""
            )}
            {currentUser ? (
              <li>
                <NavLink to="/add-book">Add Book</NavLink>
              </li>
            ) : (
              ""
            )}
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
        <div className="order-last flex items-center gap-2">
          <button className="lg:mr-5" onClick={handleDarkLight}>
            {theme === "dark" ? (
              <FiSun className="text-[#fff] text-[35px]" />
            ) : (
              <IoIosMoon className="text-[#fff] text-[35px]" />
            )}
          </button>
          {currentUser?.photoURL ? (
            <img
              className="h-[35px] md:h-[45px] rounded-full"
              src={currentUser.photoURL}
              alt="User Avatar"
            />
          ) : (
            ""
          )}
          <p className="text-[#fff] font-medium text-xl  mr-3 hidden xl:block">
            {currentUser ? currentUser.displayName : ""}
          </p>
          <div className="hidden md:block">
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="btn bg-theme-golden hover:bg-theme-hover-golden  rounded-none border-none px-10 text-xl  text-[#fff]"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="btn bg-theme-golden hover:bg-theme-hover-golden rounded-none border-none px-10 text-xl  text-[#fff]">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
