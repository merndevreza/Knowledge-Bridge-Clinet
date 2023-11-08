import { Link } from "react-router-dom";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import footerLogo from "../../../assets/images/logo/logo-2.png";
const Footer = () => {
  return (
    <footer className="bg-theme-black border-t-4 border-theme-orange-red">
      <div className=" footer footer-center p-10 bg-[#03112c6c] text-[#fff]">
        <aside>
          <img src={footerLogo} alt="" />
          <p className="text-lg mt-5 lg:text-xl">
            Connect Your Knowledge with Genius  
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link to="/">
              <FaLinkedinIn></FaLinkedinIn>
            </Link>
            <Link to="/">
              <RiTwitterXFill></RiTwitterXFill>
            </Link>
            <Link to="/">
              <FaFacebookF></FaFacebookF>
            </Link>
            <Link to="/">
              <FaInstagram></FaInstagram>
            </Link>
          </div>
        </nav>
      </div>
      <p className="bg-[#010114] text-center text-[#fff] py-4">
        Copyright &copy; 2023, All right reserved by Rezaul Karim.
      </p>
    </footer>
  );
};

export default Footer;
