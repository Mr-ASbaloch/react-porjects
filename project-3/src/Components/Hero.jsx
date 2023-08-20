import React from "react";

const Hero = () => {
  return (
    <div className="container  md:px-[5%] mx-w-[1024px]">
      <div className="md:flex md:mx-w-[30%] ">
        <div className="md:py-11  lg:p-11 lg:mt-10">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-justify">
            Lessons and insights{" "}
          </h1>
          <p className="text-2xl font-semibold text-[#4CAF4F] capitalize md:text-3xl lg:text-4xl md:mt-2 text-justify">
            from 8 years{" "}
          </p>
          <p className=" text-center p-5 md:mt-2">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-[#4CAF4F] text-white p-1 w-[125px] rounded-md cursor-pointer md:mt-5 ml-0 font-semibold">
            Register
          </button>
        </div>
        <div className="mt-5 md:w-[50%]">
          <img
            src="assets/Illustration.png"
            alt="img"
            className="p-10 md:p-5 lg:p-10  object-cover md:w-[85%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
