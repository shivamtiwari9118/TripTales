import { FaGithub, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {
  let navigate = useNavigate();
  return (
    <div className="w-full bg-[#1ba0e2] border-gray-400 mt-16">
      <div className="max-w-[1360px] m-auto pt-8 pb-6 px-5">
        <div className="w-full flex justify-center items-center gap-10">
          <Link
            to={"https://www.linkedin.com/in/vikram-kumar-choudhary/"}
            target="_blank"
          >
            <FaLinkedin className="text-white text-2xl md:text-3xl cursor-pointer" />
          </Link>
          <Link to={"https://github.com/vikram0104irctc"} target="_blank">
            <FaGithub className="text-white text-2xl md:text-3xl cursor-pointer" />
          </Link>
          <FaYoutube className="text-white text-2xl md:text-3xl cursor-pointer" />
          <FaTwitter className="text-white text-2xl md:text-3xl cursor-pointer" />
        </div>
        <div className="w-full flex flex-wrap md:flex-nowrap justify-center items-center gap-5 md:gap-7 mt-5">
          <h2
            onClick={() => navigate("/")}
            className="text-white text-md md:text-lg font-semibold cursor-pointer"
          >
            Home
          </h2>
          <h2
            onClick={() => navigate("/pricing")}
            className="text-white text-md md:text-lg font-semibold cursor-pointer"
          >
            Pricing
          </h2>
          <h2 className="text-white text-md md:text-lg font-semibold cursor-pointer">
            About
          </h2>
          <h2 className="text-white text-md md:text-lg font-semibold cursor-pointer">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="w-full bg-[#1ba0e2] border-t-[2px] border-gray-300">
        <h2 className="text-white text-center p-[1px] text-sm">
          Designed by Vikram © 2024. All rights reserved.
        </h2>
      </div>
    </div>
  );
};
