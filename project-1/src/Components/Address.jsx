import React from "react";
import {BiMessageRoundedDots} from 'react-icons/bi'

const Address = () => {
  return (
    <div>
      <div className="mt-8 md:flex w-full md:px-[10%] md:m-auto  md:gap-5 md:mt-11 md:mb-8 ">
        <div className='md:w-[50%] '>
          <p className='text-[#16195E] text-xl font-bold px-5 md:px-8 md:text-3xl md:mt-4 lg:text-5xl lg:text-left lg:px-2 lg:mb-5 '>Your health is our number one highest priority</p>
          <p className='px-5 mt-2'>
            Everyone deserve a better treatment for their health care, including
            you and that is our main priority
          </p>
          <div className='bg-[#93e7ba] p-5 text-black mt-3  border-l-2 border-[#16195E]'>
            <p className='px-5 '>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer .
            </p>
            <h1 className='font-bold flex items-center px-8 mt-2 gap-2  '> <BiMessageRoundedDots size={20}/> Frank Anthony</h1>
            <h2 className="px-8">Founder of Yogasm</h2>
          </div>
        </div>

        <div className='md:w-[50%]'>
          <img
            src="/Assets/Pexels Photo by Anastasia  Shuraeva.png"
            alt="img"
            className="w-full p-5 md:w-[300px] md:h-auto lg:mt-10 "
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
