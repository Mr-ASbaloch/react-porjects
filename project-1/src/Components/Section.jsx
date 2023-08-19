import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Section = () => {
  return (
    <div>
      <div className="hero-main  max-w-full">
        <div>
          <div className=" md:w-full md:flex lg:w-full   ">
            <div className="bg-[#16195E] text-white  pb-5 md:w-[50%]  md:p-5 lg:p-8 lg:w-[60%]  ">
              <p className="text-3xl font-bold text-justify p-5 md:text-4xl lg:text-6xl lg:p-8">
                Medical care <br />
                simplified for <br />
                everyone
              </p>
              <p className="  px-5 mt-0 lg:text-xl lg:px-11">
                A new way to transform your daily medical care into the <br />
                simples and effective one.
              </p>

              <button className="flex items-center bg-[#00A962] font-semibold p-1 px-3 rounded-sm mt-2  mx-5  md:mt-5 lg:mt-8 lg:mx-8 ">
                Try for free <MdArrowForwardIos />
              </button>
            </div>
            <div className="md:w-[50%]  lg:w-[40%] ">
              <img
                src="/Assets/image 6.png"
                alt="img"
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
