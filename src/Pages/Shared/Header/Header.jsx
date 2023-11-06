import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo-2.png";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

//==============
// component
//==============
const Header = () => {
  //mobile Menu
  const [isOpen, setIsOpen] = useState(false);
  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  //
  return (
    <div className="bg-[#04102e]">
      <header className="container mx-auto py-4 flex justify-between items-center">
        <div className="order-2 lg:order-1">
          <img className="max-h-[100px]" src={logo} alt="" />
        </div>
        <nav className="order-1 lg:order-2">
          <button
            onClick={handleMobileMenu}
            className="text-2xl border-2 p-1 text-[#fff] lg:hidden"
          >
            <RiMenuLine></RiMenuLine>
          </button>
          <ul
            className={
              isOpen
                ? "flex flex-col gap-4  text-xl font-medium font-sulphur pl-6 absolute z-30 left-0 top-0 h-screen w-1/3 bg-theme-black text-[#fff] "
                : "hidden lg:flex gap-5 text-[#fff]  text-xl font-medium font-sulphur "
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
            <li>
              <NavLink to="/all-books">All Books</NavLink>
            </li>
            <li>
              <NavLink to="/borrowed-books">Borrowed Books</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>
          <div className="order-last">
          <Link to="/login">
            <button className="btn bg-theme-golden rounded-none border-none px-10 text-lg  text-[#fff]">
              Login
            </button>
          </Link>
          </div>
      </header>
    </div>
  );
};

export default Header;
