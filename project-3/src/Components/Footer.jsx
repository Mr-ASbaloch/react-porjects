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
    <div className=" bg-[#263238] text-white  ">
      <div className="m-0 p-0 mt-5 md:mt-10 md:mb-10 md:flex md:gap-5 ">
        <div className="lg:w-[40%] lg:p-5" >
         <h1 className="flex gap-2 items-center justify-center mt-5">
            <img
              src="assets/Logo (1).png"
              alt="logo"
              className="w-[20px] h-[20px] items-center"
            />
            <span className="font-bold text-xl">Nexcent</span>{" "}
          </h1>
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
          <p className="flex  justify-center gap-5  font-bold mt-4">
            <BsFacebook size={20} />
            <BsTwitter size={20} />
            <BsMessenger size={20} />
            <BsYoutube size={20} />
          </p>
        </div>
        <div className="md:flex md:gap-7 md:p-5 lg:w-[60%] md:text-left">
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
          <ol className="mt-5  ">
            <li>Stay up to date</li>
            <li className="flex items-center  ">
              <input
                type="text"
                placeholder="Your email address"
                className=" bg-transparent w-auto m-auto"
              />{" "}
              <BsTelegram  size={24} className="bg-transparent" />
            </li>
          </ol>
        </div>
      </div>
      </div>
    
  );
};

export default Footer;
