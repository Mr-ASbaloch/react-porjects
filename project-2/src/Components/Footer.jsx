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
    <div className=" bg-[#262A4E] text-white   pb-5">
      <div className="m-0 p-0 mt-5 md:mt-10 md:mb-10 md:flex md:gap-5 ">
        <div className="lg:w-[40%] lg:p-5 pt-5">
          <h1 className="flex gap-2 items-center justify-center mt-5">
            <img
              src="/Assets/Deltify..png"
              alt="logo"
              className="w-[100px]  object-cover items-center p-1 mt-1  "
            />
          
          </h1>
          <p className="text-center">Copyright © 2020 Deltify.</p>
          <p className="text-center">@ 2020 Deltify. All Right Researved</p>
          <p className="flex  justify-center gap-5  font-bold mt-4">
            <BsFacebook size={20} className="text-[#F79E0E]" />
            <BsTwitter size={20} />
            <BsMessenger size={20} />
            <BsYoutube size={20} />
          </p>
        </div>
        <div className="flex justify-around md:justify-start md:gap-10 md:p-5 lg:w-[30%] md:text-left">
          <ol className="font-light mt-4">
            <h1 className="text-[#F79E0E] text-xl border-b border-[#F79E0E] mb-2 text-center">Company</h1>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Pricing </li>
            <li> Testonomials</li>
          </ol>
          <ol className="font-light mt-4">
            <h1 className="text-[#F79E0E] text-xl border-b border-[#F79E0E] mb-2 text-center">Support</h1>
            <li>Help Center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy </li>
            <li> Status</li>
          </ol>
        </div>

        <div className=" mt-5 text-center pt-5 md:justify-start  md:p-5 lg:w-[30%] md:text-left mb-2">
        <h1 className="text-[#F79E0E] text-xl  border-[#F79E0E] mb-2 ">Keep With Us</h1>
          <p className="pt-3">
          Subscribe Our Newsletter
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <input type="email" name="your email " placeholder="abc@gmail.com" id="" className=' p-1 outline-none ' />
          <button className="bg-[#4e6f9b] text-white p-1 w-[100px]   mt-5">Get it now!</button>
        </div>
      </div>
      <hr className='mb-2 md:block hidden  bg-[#F79E0E]' />
      <div>
        <p className='text-center'>@ Copyright 2020 <span className="text-[#F79E0E] mt-2  ">Deltify Designs</span>. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;  