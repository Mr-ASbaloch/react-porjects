import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0F124D] p-4">
      {/* for laptop  */}
      <div className='flex px-16 justify-between'>
      <div className="text-white font-bold text-xl hidden lg:block">Deltify</div>
      <div className="hidden lg:block bg-[#0F124D] ">
        <ul className="flex items-center text-white m-auto  cursor-pointer md:gap-5 ">
          <li className="mx-2">Home</li>
          <li className="mx-2">Service</li>
          <li className="mx-2">Feature</li>
          <li className="mx-2">Product</li>
          <li className="mx-2">Testimonial</li>
        </ul>
      </div>
      <div className="lg:flex gap-2  hidden">
        <button className="text-[#F79E0E] font-semibold hover:bg-[#F79E0E] hover:text-black border border-[#F79E0E] w-[100px] rounded-md">
          Login
        </button>
        <button className="bg-[#F79E0E] hover:bg-transparent hover:border  hover:border-[#F79E0E] text-white w-[100px] rounded-md">
          Sign up
        </button>
      </div>
      </div>
      <div className="flex items-center justify-between">
        {/* for mobile  */}
        <div className="text-white font-bold text-xl lg:hidden">Deltify</div>
        <div className="lg:hidden px-5 font-bold">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-2 md:w-full">
          <ul className="flex flex-col space-y-2 p-5 text-center bg-slate-200 md:w-full ">
            <li>
              <a className="text-[#0F124D] font-bold  text-xl " href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="text-[#0F124D] font-bold  text-xl " href="#about">
                About
              </a>
            </li>
            <li>
              <a
                className="text-[#0F124D] font-bold  text-xl "
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a className="text-[#0F124D] font-bold  text-xl " href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
