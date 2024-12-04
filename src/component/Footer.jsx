import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[rgb(51,29,168)] to-[#865AEF] text-white">
      <div className="md:mx-10 ">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-10  mx-4 sm:mx-[8%]">
          {/* left sight */}
          <div>
            <img
              className="w-40 mb-3.5"
              src={"./Group 1000014986.png"}
              alt=""
              srcset=""
            />
            <p className="w-full md:w-2/3 leading-6 text-pcolor">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          {/* middle sight */}
          <div>
            <p className="font-semibold mb-4 text-lg text-white">COMPANY</p>
            <ul className="flex flex-col gap-1.5 text-pcolor">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                {" "}
                <Link to={""}> About us</Link>
              </li>
              <li>
                {" "}
                <Link to={""}> Contact us</Link>
              </li>
              <li>
                {" "}
                <Link to={""}>Privacy policy</Link>
              </li>
            </ul>
          </div>
          {/* right sight */}
          <div>
            <p className="text-white font-semibold mb-4 text-lg">
              GET IN TOUCH
            </p>
            <ul className="flex flex-col gap-1.5 text-pcolor">
              <li>01743860970</li>
              <li>tanvir620032gmail.com</li>
            </ul>
          </div>
        </div>
        {/* bottom part */}
        <div className="mx-4 sm:mx-[8%]">
          <hr className="text-pcolor border border-1" />
          <p className="text-center text-sm font-normal text-pcolor py-4 ">
            Copyright © 2024 Tanvir Siam - All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
