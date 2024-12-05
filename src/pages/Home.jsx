import React from "react";
import Navbar from "../component/Navbar";
import Branding from "../component/Branding";
import Course from "../component/Course";
import Top_Category from "../component/Top_Category";
import Left_right from "../component/Left_right";
import Images from "../component/Images";
import Testimonials from "../component/Testimonials";
import Banner from "../component/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Branding />
      <Course />
      <Top_Category />
      <Left_right />
      <Images />
    </div>
  );
};

export default Home;
