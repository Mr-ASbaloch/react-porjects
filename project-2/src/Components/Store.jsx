import React from "react";
import { TiTickOutline } from "react-icons/ti";

const Store = () => {
  return (
    <div>
      <div className="md:flex md:flex-row-reverse gap-11 md:mb-8 md:px-[4%] md:pt-8">
        <div className="text-start px-3  md:w-[60%] lg:w-[45%]   md:mt-11 md:px-11">
          <h1 className="text-[#F79E0E] text-3xl ">Expert store designing</h1>
          <h1 className="text-2xl pt-4 font-bold  md:text-3xl  lg:text-4xl lg:font-semibold">
            <span className="text-[#F79E0E]">Shopify</span> stores that are
            proven in its <span className="text-[#F79E0E]">power</span> to
            convert
          </h1>

          <p className="pt-2 ">
            There are enough stresses involved in running a successful ecommerce
            site - the design and efficacy of your store shouldn't be one of
            them
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
          <button className="bg-[#F79E0E] text-white w-[150px] rounded-lg p-2 mt-5">
            Get Started
          </button>
        </div>
        <div className=" md:w-[40%] lg:w-[40%]">
          <img
            src="/Assets/Banner (2)reer 1.png"
            alt="img"
            className=" pt-5 md:px-0  md:w-full md:h-full md:object-cover  "
          />
        </div>
      </div>
    </div>
  );
};

export default Store;
