import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function handleNav(params) {
    setNav(!nav);
  }
  return (
    <div className=" flex justify-between md:flex mb-11">
      <div className="flex">
        <img
          src="assets/Icon (6).png"
          alt="logo"
          className="h-[30px] w-[30px]"
        />
        <p className="font-bold text-2xl">Nexcent</p>
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center m-auto    mt-2 cursor-pointer md:gap-2 ">
          <li className="mx-2">Home</li>
          <li className="mx-2">Service</li>
          <li className="mx-2">Feature</li>
          <li className="mx-2">Product</li>
          <li className="mx-2">Testimonial</li>
        </ul>
      </div>
      <div className="md:flex gap-2  hidden">
        <button className="text-[#4CAF4F] font-semibold border border-[#4CAF4F] w-[100px] rounded-md">
          Login
        </button>
        <button className="bg-[#4CAF4F] text-white w-[100px] rounded-md">
          Sign up
        </button>
      </div>

      {/* for mobile  */}

      <div className="md:hidden">
        <div onClick={handleNav} >
          {!nav ? (
            <IoIosCloseCircleOutline
              size={30}
              className="text-[green] font-bold"
            />
          ) : (
            <CiMenuKebab size={30} className="text-[green] font-bold" />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed  top-0 text-white font-semibold  left-0 bg-slate-400  h-full border-r-2 border-black w-[50%] p-5 ease-in-out duration-500"
              : "fixed left-[-100%]  ease-linear duration-500"
          }
        >
          <ul className="mt-5">
            <p className="font-bold text-3xl mb-1 text-[#000000]">Nexcent</p>
            <li className="mx-2 p-2 border-b">Home</li>
            <li className="mx-2 p-2 border-b">Service</li>
            <li className="mx-2 p-2 border-b">Feature</li>
            <li className="mx-2 p-2 border-b">Product</li>
            <li className="mx-2 p-2">Testimonial</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
