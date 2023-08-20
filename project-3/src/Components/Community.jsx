import React from "react";

const Community = () => {
  return (
    <div className="md:px-[5%] mt-10 md:mt-11 mx-w-[1024px] md:mb-10">
      <div>
        <div>
          <h2 className="text-[#4CAF4F] text-2xl font-bold mb-5 capitalize">
            Our community{" "}
          </h2>
          <h1 className="text-center mt-1">
            Manage your entire community in a single system
          </h1>
          <p className="text-center mt-1">Who is Nextcent suitable for?</p>
        </div>
        <div className="flex flex-wrap mt-5 lg:justify-between">
          <div className="w-full p-5 shadow-lg rounded-md m-2 lg:w-[25%] ">
            <img
              src="assets/Icon (1).png"
              alt="icon"
              className="m-auto"
            />
            <h1 className="font-bold ">Membership Organisations</h1>
            <p className="text-center mt-2">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="w-full p-5  rounded-md m-2 lg:w-[25%] shadow-lg">
            <img
              src="assets/Icon (2).png"
              alt="icon"
              className="m-auto"
            />
            <h1 className="font-bold">National Associations</h1>
            <p className="text-center mt-2">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="w-full p-5 bg-slate-200 shadow-lg   rounded-md m-2 lg:w-[25%]">
            <img
              src="assets/Icon (1).png"
              alt="icon2"
              className="m-auto"
            />
            <h1 className="font-bold lg:mt-5 text-center">Clubs And Groups</h1>
            <p className="text-center mt-2">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
