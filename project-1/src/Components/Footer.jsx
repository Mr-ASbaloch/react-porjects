import React from "react";
import {
  BsTwitter,
  BsFacebook,
  BsMessenger,
  BsYoutube,
  BsTelegram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-[#080808] text-white   pb-5">
      <div className="m-0 p-0 mt-5 md:mt-10 md:mb-10 md:flex md:gap-5 ">
        <div className="lg:w-[40%] lg:p-5 pt-5">
          <h1 className="flex gap-2 items-center justify-center mt-5">
            <img
              src="/Assets/Healthy.png"
              alt="logo"
              className="w-[50px]  object-cover items-center p-1 bg-[white] mt-1 "
            />
            <span className="font-bold text-2xl mb-2">TrafoHealth</span>{" "}
          </h1>
          <p className="text-center">Copyright © 2020 TrafoHealth.</p>
          <p className="text-center">@ 2020 TrafoHealth. All Right Researved</p>
          <p className="flex  justify-center gap-5  font-bold mt-4">
            <BsFacebook size={20} />
            <BsTwitter size={20} />
            <BsMessenger size={20} />
            <BsYoutube size={20} />
          </p>
        </div>
        <div className="flex justify-around md:justify-start md:gap-10 md:p-5 lg:w-[30%] md:text-left">
          <ol className="font-light mt-4">
            <h1 className="font-bold">Company</h1>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Pricing </li>
            <li> Testonomials</li>
          </ol>
          <ol className="font-light mt-4">
            <h1 className="font-bold">Support</h1>
            <li>Help Center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy </li>
            <li> Status</li>
          </ol>
        </div>

        <div className=" mt-5 text-center pt-5 md:justify-start  md:p-5 lg:w-[30%] md:text-left">
          <p className='text-xl'>KEEP UP WITH US</p>
          <p className="pt-3">
            Stay up to date by reading our high quality <br />
            article and personalized for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
