import React from "react";
import {BsForward} from 'react-icons/bs'

const Demo = () => {
  return (
    <div className="md:px-[5%] mt-10 md:mt-11 mx-w-[1024px] md:mb-10 ">
      <div>
        <p className="text-xl font-semibold md:text-3xl lg:text-4xl">Pellentesque suscipit fringilla libero eu.</p>
        <button className="bg-[#4CAF4F] flex items-center font-semibold m-auto mt-5 p-2 rounded-xl text-white">Get a Demo <BsForward size={24}/></button>
      </div>
    </div>
  );
};

export default Demo;
