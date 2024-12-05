import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { logo } from "../assets/logo.png";
const Navbar = () => {
  //   const navigate = useNavigate();
  //   const [menu, setShowMenu] = useState(false);
  //   const [token, setToken] = useState(true);
  return (
    <div className="flex justify-between items-center text-sm py-4   border-b border-b-gray-400 mx-4 sm:mx-[8%]">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={"./logo.png"}
        alt=""
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink className={""} to={"/"}>
          <li className="py-1 font-outfit font-normal">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/6 m-auto hidden" />
        </NavLink>
        <NavLink>
          <li className="py-1 font-outfit">Courses</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/6 m-auto hidden" />
        </NavLink>
        <NavLink>
          <li className="py-1 font-outfit">Blog</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/6 m-auto hidden" />
        </NavLink>
        <NavLink>
          <li className="py-1 font-outfit">Shop</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/6 m-auto hidden" />
        </NavLink>
        <NavLink>
          <li className="py-1 font-outfit">Pages</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/6 m-auto hidden" />
        </NavLink>
        <NavLink>
          <li className="py-1 font-outfit">Events</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/6 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-3">
        <button className="bg-primary text-[18px] underline text-[#4A4A4A] px-8 py-3.5 font-light hidden md:block rounded-full font-outfit">
          Login
        </button>
        <button className="bg-primary text-white px-8 py-3.5 font-light hidden md:block rounded-[20px] font-outfit bg-gradient-to-r from-[#083F9B] to-[#7F56D9] text-[18px]">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
