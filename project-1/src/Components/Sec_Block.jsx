import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const Sec_Block = () => {
  return (
    <div className="second-block-main mt-8">
      <div className='md:flex md:mx-[4%] border w-full'>
        <div>
          <p className='text-[#16195E] text-2xl font-bold px-5 '>
            Changing the way <br /> you manage your <br /> health care
          </p>
        </div>
        <div className="md:flex w-full ">
          <div className='px-8 sm:m-9 w-[100%] text-center text-[#16195E] shadow-md mb-5'>
            <img
              src="/Assets/Frame.png"
              alt="frame"
              className="w-[40px] h-[40px] m-auto"
            />
            <p>Online consultation with your doctor</p>
            <button className='flex items-center m-auto '>
              Learn more <GrFormNextLink />
            </button>
          </div>
          <div>
            <img
              src="/Assets/Frame (1).png"
              alt="frame"
              className="w-[40px] h-[40px] m-auto"
            />
            <p>Medicine on your front door</p>  
            <button>
              Learn more <GrFormNextLink />
            </button>
          </div>
          <div>
            <img
              src="/Assets/Frame (2).png"
              alt="frame"
              className="w-[40px] h-[40px] m-auto"
            />
            <p>Digital medical records</p>
            <button>
              Learn more <GrFormNextLink />
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
