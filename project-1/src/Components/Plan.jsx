import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Plan = () => {
  return (
    <div className='bg-[#16195E] pb-5  md:mt-10'>
      <div className='sm:w-[75%] sm:m-auto  sm:p-5'>
        <p className='text-white text-2xl  text-center font-bold px-5 mt-4 pt-5  sm:text-3xl md:text-4xl  lg:text-5xl lg:font-semibold'>
          Get your own <br />
          personalized plans 
        </p >
        <p className='text-xl text-center  pt-4 px-5 text-white'>Start consulting with us about your health condition for free</p>
        <button className="flex items-center bg-[#00A962] font-semibold p-1 px-3 text-white rounded-sm mt-2 m-auto   gap-3  md:mt-5 lg:mt-8  ">
          Try for free <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Plan;
