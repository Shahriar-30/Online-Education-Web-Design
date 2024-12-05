import React from "react";

const Left_right = () => {
  return (
    <div className="mx-4 sm:mx-[8%]">
      <div className="flex flex-col md:flex-row items-center gap-28 py-[80px] relative ">
        <div className="w-[650px]">
          <img src="./Group 1000014993.png" alt="" />
        </div>
        <div>
          <h4 className="text-[34px] text-black font-row font-medium ">
            The number one factor in <br />
            <span className="text-[#2AAA94]">
              {" "}
              relevance drives out resistance.
            </span>
          </h4>
          <p className="w-[680px] font-outfit my-3 text-p ">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className="bg-primary text-white px-8 py-3 font-light hidden md:block rounded-[10px] font-outfit bg-gradient-to-r from-[#083F9B] to-[#7F56D9] text-[18px]">
            Learn More
          </button>
        </div>
        <img
          className="absolute bottom-[98px] right-16"
          src="./Polygon 7.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Left_right;
