import React from "react";
import { IoSearch } from "react-icons/io5";
const Banner = () => {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#04016C] to-[#4A16BD] h-[700px] flex place-items-center">
        <div className="mx-4 sm:mx-[8%] relative">
          <div>
            <h3 className="font-normal text-[17px] font-outfit text-white">
              Successful coaches are visionaries
            </h3>
            <h4 className="font-row font-bold text-[62px] w-[520px] leading-[70px] text-white mt-1">
              Good <span className="text-[#4BE5CA]">coaching</span> is good
              teaching & nothing else.
            </h4>
            <div className="flex gap-2 mt-5">
              <button className="px-6 py-3 bg-transparent border border-1 border-white text-white rounded-[3px] font-outfit font-semibold">
                View Courses
              </button>
              <button className="px-5 py-2.5 bg-transparent   text-white rounded-[3px] font-outfit font-semibold">
                Get Free Consultation
              </button>
            </div>
            <div className="mt-6 relative w-[375px]">
              <input
                className="py-3.5 pl-3.5 w-[375px] rounded-[3px] outline-none "
                type="text"
                placeholder="What do you want to learn today?"
              />
              <button className="flex items-center gap-1 bg-gradient-to-r from-[#083F9B] to-[#7F56D9] px-3 py-2 text-white rounded-[3px] absolute right-2 top-1.5">
                <span>
                  <IoSearch className="text-[16px] text-white" />
                </span>{" "}
                Search
              </button>
            </div>
            <img
              className="absolute left-[630px] bottom-[-158px] h-64"
              src="./Group 1000014995.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="z-10 absolute left-[1100px] bottom-[-158px]"
              src="./young-smiling-confident-woman-using-laptop-computer-looking-camera-isolated-white-background-removebg-preview 1.png"
              alt=""
            />
            <img
              className="absolute left-[-154px] top-[-17px]"
              src="./Ellipse 8321.png"
              alt=""
            />
            <img
              className="absolute z-0 right-[-995px] w-[1600px] rounded-full top-[-47px]"
              src="./Ellipse 8319.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
