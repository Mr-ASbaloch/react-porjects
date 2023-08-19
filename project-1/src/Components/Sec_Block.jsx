import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const Sec_Block = () => {
  return (
    <div className="second-block-main mt-8">
      <div className="md:flex md:flex-col md:px-[4%]  w-full">
        <div>
          <p className="text-[#16195E] text-2xl font-bold px-5  md:text-3xl lg:text-5xl lg:font-semibold ">
            Changing the way <br /> you manage your <br /> health care
          </p>
        </div>
        <div className="md:flex w-full  md:mt-8 gap-5  lg:mt-11 lg:m-5 ">
          <div className="px-8  w-[100%]  text-[#16195E] mt-5 mb-5 md:w-[30%]  lg:p-8 lg:text-lg lg:shadow-md">
            <img
              src="/Assets/Frame.png"
              alt="frame"
              className="w-[40px] h-[40px] mb-2"
            />
            <p>Online consultation with your doctor</p>
            <button className="flex items-center  ">
              Learn more <GrFormNextLink size={25} />
            </button>
          </div>
          <div className="px-8  w-[100%]  text-[#16195E] mt-5 mb-5  md:w-[30%]  lg:p-8 lg:text-lg lg:shadow-md">
            <img
              src="/Assets/Frame (1).png"
              alt="frame"
              className="w-[40px] h-[40px] mb-2 "
            />
            <p>Medicine on your front door</p>
            <button className="flex items-center  ">
              Learn more <GrFormNextLink size={25} />
            </button>
          </div>
          <div className="px-8  w-[100%]  text-[#16195E] mt-5 mb-5 md:w-[30%]  lg:p-8 lg:text-lg lg:shadow-md">
            <img
              src="/Assets/Frame (2).png"
              alt="frame"
              className="w-[40px] h-[40px] mb-2 "
            />
            <p>Digital medical records</p>
            <button className="flex  items-center  ">
              Learn more <GrFormNextLink size={25} />
            </button>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Sec_Block;
