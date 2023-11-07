import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

import { FaEnvelope, FaEye, FaEyeSlash, FaKey } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginUser, googleLogin,githubLogin } = useContext(AuthContext);
  const [isShown, setIsShown] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();
  const handlePasswordShow = (e) => {
    e.preventDefault();
    setIsShown(!isShown);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    //login user
    loginUser(email, password)
      .then(() => {
        Swal.fire({
          title: "Congrats!!",
          text: `You successfully Logged in`,
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: "Error!",
          text: `${errorMessage}`,
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          title: "Congrats!!",
          text: `You successfully Logged in`,
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: "Error!",
          text: `${errorMessage}`,
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      });
  };
  const handleGithubLogin=()=>{
    githubLogin()
    .then(() => {
      Swal.fire({
        title: "Congrats!!",
        text: `You successfully Logged in`,
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate(location?.state ? location.state : "/");
    })
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        title: "Error!",
        text: `${errorMessage}`,
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    });
  }
  return (
    <div>
      <div className="dark:bg-theme-dark bg-theme-light py-14 md:py-24 lg:py-28 px-2">
        <div className="dark:bg-theme-dark-top bg-white  max-w-3xl mx-auto px-6 md:px-12 py-10 md:py-20">
          <h2 className="text-4xl dark:text-white  text-theme-black mb-9 font-semibold">Login</h2>
          <form className="flex flex-col text-theme-black gap-3" onSubmit={handleLogin}>
            <div className="flex relative items-center mb-3 rounded-md  ">
              <label
                className="p-3 absolute rounded-md bg-theme text-theme-black"
                htmlFor="email"
              >
                <FaEnvelope></FaEnvelope>
              </label>
              <input
                className="w-full  font-medium placeholder:font-normal pl-12 py-2 placeholder:text-[#6c757d] border-b border-[#c9c9c9] focus:outline-none focus:border-[#615F5C]"
                type="email"
                name="email"
                placeholder="Email*"
                id="email"
                required
              />
            </div>
            <div className="flex relative items-center mb-3 rounded-md  ">
              <label
                className="p-3 absolute rounded-md bg-theme text-theme-black"
                htmlFor="password"
              >
                <FaKey></FaKey>
              </label>
              <input
                className="w-full  font-medium placeholder:font-normal pl-12 py-2 placeholder:text-[#6c757d] border-b border-[#c9c9c9] focus:outline-none focus:border-[#615F5C]"
                type={isShown ? "text" : "password"}
                name="password"
                placeholder="Password*"
                id="password"
                required
              />
              <button
                onClick={handlePasswordShow}
                className="absolute right-3 bottom-3"
              >
                {isShown ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </div>
            <div className="mt-3">
              <input
                className="btn border-none rounded-none bg-theme-golden hover:bg-theme-hover-golden px-12 text-white  cursor-pointer text-lg font-medium"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="relative text-center before:w-full before:h-[2px] before:bg-theme-black dark:before:bg-white  before:absolute before:left-0 mt-20 mb-4">
          <h2 className="text-xl dark:text-white  bg-white text-theme-black font-semibold dark:bg-theme-dark-top inline-block relative -top-3  px-4 ">
            You can also login with,
          </h2>
          </div>
          <div className="text-center">
          <button
            onClick={handleGoogleLogin}
            className="btn bg-transparent border-2 border-theme-black dark:border-theme-golden px-4 text-lg hover:bg-theme-golden dark:text-theme-golden text-theme-black hover:text-white dark:hover:text-theme-black  hover:border-theme-golden
            rounded-none"
          >
            <FcGoogle></FcGoogle> Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="btn bg-transparent border-2 border-theme-black dark:border-theme-golden px-4 text-lg hover:bg-theme-golden dark:text-theme-golden text-theme-black hover:text-white dark:hover:text-theme-black  hover:border-theme-golden
          ml-3 rounded-none"
          >
            <AiFillGithub></AiFillGithub> Github
          </button>
          </div>
        </div>
        <div className="mt-8 dark:bg-theme-dark-top bg-white  max-w-3xl mx-auto md:px-12 px-6 py-6 md:py-14 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-semibold dark:text-white  text-theme-black ">New Customer?</h2>
          <Link to="/register">
            <button className=" btn border-none px-8 rounded-none bg-theme-golden hover:bg-theme-hover-golden text-white  cursor-pointer text-lg">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
