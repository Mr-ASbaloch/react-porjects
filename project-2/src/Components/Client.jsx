import React from "react";
import {AiOutlineStar} from 'react-icons/ai'

const Client = () => {
  return (
    <div className="main md:mt-11 md:mb-11">
      <div>
        <div className='text-center mt-8 '>
          <p className="text-[#F79E0E] md:text-3xl mb-3">TESTIMONIALS</p>
          <h1 className="text-xl">What They Say’s About Us</h1>
        </div>
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-[4%] py-10 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div className="h-full text-center">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-[#F79E0E]"
                      src="/Assets/Ellipse 64.png"
                    />
                    <p className="leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-[#F79E0E] mt-6 mb-4" />
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                      HOLDEN CAULFIELD
                    </h2>
                    <p className="text-gray-500">Senior Product Designer</p>
                    <div className="flex  justify-center mt-2">
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div className="h-full text-center">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-[#F79E0E]"
                      src="/Assets/Ellipse 64.png"
                    />
                    <p className="leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-[#F79E0E] mt-6 mb-4" />
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                      ALPER KAMU
                    </h2>
                    <p className="text-gray-500">UI Develeoper</p>
                    <div className="flex  justify-center mt-2">
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 lg:mb-0 p-4">
                  <div className="h-full text-center">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-[#F79E0E]"
                      src="/Assets/Ellipse 64.png"
                    />
                    <p className="leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-[#F79E0E] mt-6 mb-4" />
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                      HENRY LETHAM
                    </h2>
                    <p className="text-gray-500">CTO</p>
                    <div className="flex  justify-center mt-2">
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    <p className='text-[#F79E0E] font-bold'><AiOutlineStar size={25}/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Client;
