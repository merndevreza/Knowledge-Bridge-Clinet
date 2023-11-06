import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

import { FaEnvelope, FaEye, FaEyeSlash, FaKey } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
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
  return (
    <div>
      <div className="bg-[#f4f4f4] py-14 md:py-24 lg:py-28 px-2">
        <div className="bg-[#fff] max-w-3xl mx-auto px-6 md:px-12 py-10 md:py-20">
          <h2 className="text-4xl text-theme-black mb-9 font-semibold">Login</h2>
          <form className="flex flex-col text-theme-black gap-3" onSubmit={handleLogin}>
            <div className="flex relative items-center mb-3 rounded-md  ">
              <label
                className="p-3 absolute rounded-md bg-theme text-white"
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
                className="p-3 absolute rounded-md bg-theme text-white"
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
                className="btn border-none rounded-none bg-theme-golden px-12 text-[#fff] cursor-pointer text-lg font-medium hover:bg-theme-hover-red"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <h2 className="text-xl text-theme-black  font-semibold mt-9 mb-4">
            You can also login with,
          </h2>
          <button
            onClick={handleGoogleLogin}
            className="btn bg-transparent border-2 border-theme-orange-red px-4 text-lg text-theme-orange-red hover:border-theme-orange-red  
          hover:bg-[#e515151c]
          rounded-none"
          >
            <FcGoogle></FcGoogle> Google
          </button>
        </div>
        <div className="mt-8 bg-[#fff] max-w-3xl mx-auto md:px-12 px-6 py-6 md:py-14 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-semibold text-theme-black ">New Customer?</h2>
          <Link to="/register">
            <button className=" btn border-none px-8 rounded-none bg-theme-golden text-[#fff] cursor-pointer text-lg font-medium hover:bg-theme-hover-red">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
