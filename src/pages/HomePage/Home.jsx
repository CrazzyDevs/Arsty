import React from "react";
import Carosuel from "./Carosuel";

const Home = () => {
  return (
    <div className="px-2">
      <div className="grid place-items-center text-[#292929] text-center">
        <h1 className="font-[clash] font-[500px] md:font-[600px] lg:font-[600px] leading-[48px] md:leading-[55px] lg:leading-[125px] text-[32px] md:text-[40px] lg:text-[80px] w-[322px] md:w-[500px] lg:w-[100%]">
          Photography is poetry and beautiful untold stories
        </h1>
        <p className="font-[500px] lg:text-[28px] text-[16px] md:text-[text-20px] leading-[25.07px] lg:leading-[43.88px] md:leading-[30px] mt-[30px] w-[344px] md:w-[500px] lg:w-[926px] h-[100px] lg:h-[88px]">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>

      <div>
        <Carosuel/>
      </div>

      <div className="mt-[112px] text-[#292929] text-[28px] font-[700] leading-[43.88px]">
        <h3>Featured products</h3>
        <div className="mt-[30px]">
        <h3 className="absolute mt-[50px] text-center text-[#FFFFFF] grid justify-center">Boolean Egyptian</h3>
        <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673043075/image1_h3mp1a.png" alt="girl" className="relativea"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
