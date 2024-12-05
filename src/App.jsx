import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
