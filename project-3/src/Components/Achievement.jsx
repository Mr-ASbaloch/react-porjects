import React from "react";

const Achievement = () => {
  return (
    <div className="md:px-[5%] mt-10  md:mt-10 md:mb-10">
      <h1 className="text-2xl font-bold text-[#4CAF4F] mb-5">Achievements</h1>
      <div className="md:flex w-full "> 
        <div className="mb-2 md:w-[45%] md:text-left p-10 ">
          <h1>Helping a local </h1>
          <h2 className="text-[#4CAF4F] text-xl from-semibold md:text-3xl md:font-bold m">
            business reinvent itself
          </h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="flex flex-wrap justify-around mt-5 w-full  md:w-[45%] md:px-5">
          <div className="m-2 w-[30%] ">
            <img
              src="assets/Icon (3).png"
              alt="icon"
              className="m-auto w-[25px]"
            />
            <h1>2,245,341</h1>
            <p>Members</p>
          </div>
          <div className="m-2 w-[30%] ">
            <img
              src="assets/Icon (4).png"
              alt="icon"
              className="m-auto w-[25px]"
            />
            <h1>1,926,4361</h1>
            <p>Event Bookings</p>
          </div>
          <div className="m-2 w-[30%] ">
            <img
              src="assets/Icon (5).png"
              alt="icon"
              className="m-auto w-[25px]"
            />
            <h1>46,328</h1>
            <p>Payments</p>
          </div>
          <div className="m-2 w-[30%] ">
            <img
              src="assets/Icon (1).png"
              alt="icon"
              className="m-auto w-[25px]"
            />
            <h1>828,867</h1>
            <p>Clubs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
