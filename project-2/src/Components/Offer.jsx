import React from "react";
import {FaEuroSign } from "react-icons/fa";



const Offer = () => {
  return (
    <div>
      <div className="md:flex  gap-11 md:mb-8 md:px-[4%] md:pt-8">
        <div className="text-start px-3  md:w-[60%] lg:w-[45%]   md:mt-11 md:px-11">
          <h1 className="text-[#F79E0E] text-3xl ">More we offer!</h1>
          <h1 className="text-2xl pt-4 font-bold  md:text-3xl  lg:text-4xl lg:font-semibold">
            Engaging video ads which will explode your{" "}
            <span className="text-[#F79E0E]">sales</span>
          </h1>

          <p className="pt-2 ">
            There are enough stresses involved in running a successful ecommerce
            site - the design
          </p>
         
          <div className="flex flex-col mt-5  gap-2 md:mb-5 ">
            
                <h1 className="text-[#F79E0E] flex items-center gap-2" > <FaEuroSign/> 65.00 EUR 120.00 EUR</h1>
                <p>2-minute timer with 30-second pulses</p>
              <p>Whiter Teeth In 10 Days</p>
              <p>Waterproof & shower-safe</p>
              <button className="bg-[#4e6f9b] text-white p-1 w-[120px] rounded-lg  mt-5">Get it now!</button>
              <p>30 Day Money Back Guarantee</p>


               
          </div>
          <button className="bg-[#F79E0E] text-white w-[150px] rounded-lg p-2 mt-5">
            Get Started
          </button>
        </div>
        <div className=" md:w-[40%] lg:w-[40%]">
          <img
            src="/Assets/Group 37178.png"
            alt="img"
            className=" pt-5 md:px-0  md:w-full md:h-full md:object-cover  lg:p-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
