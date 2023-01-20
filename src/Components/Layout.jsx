import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
  <div className="flex justify-center">
    <div className="md:w-11/12 lg:w-5/6 w-[100%] p-2">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
    
  </div>
  )
};

export default Layout;
