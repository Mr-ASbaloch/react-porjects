import React from "react";
import { TiTickOutline } from "react-icons/ti";

const Hero = () => {
  return (
    <div className="hero-main bg-[#0F124D] text-white  capitalize first-letter: pb-2 ">
      <div className='md:flex md:px-[4%] md:pt-8'>
        <div className="text-start px-3 md:w-[60%]  md:mt-11 md:px-11">
          <h1 className="text-2xl pt-4 font-bold  md:text-3xl  lg:text-4xl lg:font-semibold">
            Let’s sky <span className="text-[#F79E0E]">rocket</span> your{" "}
            <span className="text-[#F79E0E]">revenue</span>
          </h1>

          <p className="pt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam Lorem ipsum dolor sit amet.
          </p>
          <div className="flex mt-5  gap-2 md:mb-5 ">
            <div>
              <h1 className="flex items-center px-1 gap-3">
                {" "}
                <TiTickOutline className="text-[#F79E0E]" />{" "}
                <span>Lorem Ipusum</span>
              </h1>
              <h1 className="flex items-center px-1 gap-3">
                {" "}
                <TiTickOutline className="text-[#F79E0E]" />{" "}
                <span>Lorem Ipusum</span>
              </h1>
              <h1 className="flex items-center px-1 gap-3">
                {" "}
                <TiTickOutline className="text-[#F79E0E]" />{" "}
                <span>Lorem Ipusum</span>
              </h1>
            </div>
            <div className=" ">
              <h1 className="flex items-center px-1 gap-3">
                {" "}
                <TiTickOutline className="text-[#F79E0E]" />{" "}
                <span>Lorem Ipusum</span>
              </h1>
              <h1 className="flex items-center px-1 gap-3">
                {" "}
                <TiTickOutline className="text-[#F79E0E]" />{" "}
                <span>Lorem Ipusum</span>
              </h1>
              <h1 className="flex items-center px-1 gap-3">
                {" "}
                <TiTickOutline className="text-[#F79E0E]" />{" "}
                <span>Lorem Ipusum</span>
              </h1>
            </div>
            
          </div>
          <button className="bg-[#F79E0E] text-white w-[150px] rounded-lg p-2 mt-5">Get Started</button>
        </div>
        <div className='md:w-[40%]'>
          <img src="/Assets/surface1.png" alt="img" className="px-5 pt-5  md:px-0 " />
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
