import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Hero = () => {
  return (
    <div className="hero-main max-w-[1536px]">
      <div className="container ">
        <div  className='max-w-[1536px] md:w-full md:flex '>
          <div className='bg-[#16195E] text-white  pb-5 md:w-[50%]  md:p-5 lg:p-8 '> 
            <p className='text-3xl font-bold text-justify p-5 md:text-4xl lg:text-5xl lg:p-6'>
              Medical care <br />
              simplified for <br />
              everyone
            </p>
            <p className='  px-5 mt-0'>
              A new way to transform your daily medical care    
              into the simplest and effective one.
            </p>
          
           <button className='flex items-center bg-[#00A962] font-semibold p-1 px-3 rounded-sm mt-2  mx-5  md:mt-5 lg:mt-8 ' >
              Try for free <MdArrowForwardIos />
            </button>
           
          </div>
          <div className='md:w-[50%] '>
            <img src="/Assets/image 6.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
