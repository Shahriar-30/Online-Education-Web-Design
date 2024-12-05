import React from "react";

const Images = () => {
  return (
    <div className="bg-gradient-to-b from-[#fff] to-[#DBEDFF] py-[30px]">
      <div className="flex justify-center mb-12">
        <img
          className="h-[520px] w-[1050px] "
          src="./Group 1000014994.png"
          alt=""
        />
      </div>
      <img
        className="absolute left-36"
        src="./Ellipse 1217.png"
        alt=""
        srcset=""
      />
      <div className="my-14">
        <h4 className="text-[#2AAA94] text-center font-bold text-[45px] font-row">
          Testimonials
        </h4>
        <p className=" text-center text-[#4E596B] text-[18px]">
          What our student say about us
        </p>
        <div className="mx-4 sm:mx-[8%] mt-14">
          <div className="flex  items-center justify-center gap-12">
            <div className="py-8 px-8 bg-white inline-block rounded-[6px]">
              <div className="flex items-center gap-6">
                <img src="./Ellipse 1202.png" alt="" />
                <h4 className="font-row font-bold text-[24px]">
                  Ronald Richards
                </h4>
              </div>
              <div>
                <p className=" text-[15px] leading-[23px] w-[330px] py-3 text-[#7E7EAA]">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu
                </p>
              </div>
              <div>
                <img src="./Group 512830.png" alt="" />
              </div>
            </div>
            <div className="py-8 px-8 bg-white inline-block rounded-[6px]">
              <div className="flex items-center gap-6">
                <img src="./Ellipse 1218.png" alt="" />
                <h4 className="font-row font-bold text-[24px]">Wade Warren</h4>
              </div>
              <div>
                <p className=" text-[15px] leading-[23px] w-[330px] py-3 text-[#7E7EAA]">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu
                </p>
              </div>
              <div>
                <img src="./Group 512830.png" alt="" />
              </div>
            </div>
            <div className="py-8 px-8 bg-white inline-block rounded-[6px]">
              <div className="flex items-center gap-6">
                <img src="./Ellipse 1219.png" alt="" />
                <h4 className="font-row font-bold text-[24px]">Jacob Jones</h4>
              </div>
              <div>
                <p className=" text-[15px] leading-[23px] w-[330px] py-3 text-[#7E7EAA]">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu
                </p>
              </div>
              <div>
                <img src="./Group 512830.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
