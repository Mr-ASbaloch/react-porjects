import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const Client = () => {
  return (
    <div>
      <div className="second-block-main mt-8 lg:mt-11">
        <div className="md:flex md:flex-col md:px-[4%]  w-full">
          <div>
            <p className="text-[#16195E] text-2xl font-bold px-5  md:text-3xl lg:text-5xl lg:font-semibold ">
              Daily curated article <br />
              for your healthcare
            </p>
          </div>
          <div className="md:flex w-full  md:mt-8 gap-5  lg:mt-11 lg:m-5 ">
            <div className="px-8  w-[100%]  text-[#16195E] mt-5 mb-5 md:w-[30%]  lg:p-8 lg:text-lg  shadow-md">
              <img
                src="/Assets/Pexels Photo by cottonbro (1).png"
                alt="frame"
                className="w-[300px] h-[300px] object-cover p-2 "
              />
              <h1 className="text-center">WELLNESS  - JAN 24, 2020</h1>
              <p className='p-3'>Can meditation banish back pain?</p>

              <button className="flex  items-center   m-auto text-[green] font-semibold">
                Learn more <GrFormNextLink size={25} />
              </button>
            </div>
            <div className="px-8   w-[100%]  text-[#16195E] mt-5 mb-5  md:w-[30%]  lg:p-8 lg:text-lg shadow-md">
              <img
                src="/Assets/Pexels Photo by cottonbro.png"
                alt="frame"
                className="w-[300px] h-[300px] object-cover p-2 "
              />
              <h1 className="text-center">FITNESS  - JAN 25, 2020</h1>
              <p className='p-3'>The latest on exercise and sleep</p>
              <button className="flex  items-center   m-auto text-[green] font-semibold">
                Learn more <GrFormNextLink size={25} />
              </button>
            </div>
            <div className="px-8   w-[100%]  text-[#16195E] mt-5 mb-5 md:w-[30%]  lg:p-8 lg:text-lg shadow-md">
              <img
                src="/Assets/Pexels Photo by cottonbro (2).png"
                alt="frame"
                className="w-[300px] h-[300px] object-cover p-2 "
              />
              <h1 className="text-center">WELLNESS  - JAN 24, 2020</h1>
              <p className="text-center p-3">The latest on exercise and sleep</p>
              <button className="flex  items-center   m-auto text-[green] font-semibold">
                Learn more <GrFormNextLink size={25} />
              </button>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
