import React from "react";

const Clients = () => {
  return (
    <div className="md:px-[5%] mt-5 md:mt-10 md:mb-10">
      <div>
        <div>
          <h1 className="text-2xl font-bold capitalize">Our Clients</h1>
          <p className=" font-semibold p-1">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex justify-between md:p-2 mt-5 ">
          <img
            src="assets/Logo (1).png"
            alt="logo"
            className="w-[30px]"
          />
          <img
            src="assets/Logo (2).png"
            alt="logo"
            className="w-[30px]"
          />
          <img
            src="assets/Logo (3).png"
            alt="logo"
            className="w-[30px]"
          />
          <img
            src="assets/Logo (4).png"
            alt="logo"
            className="w-[30px]"
          />
          <img
            src="assets/Logo (5).png"
            alt="logo"
            className="w-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
