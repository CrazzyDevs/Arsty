import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropList from "./DropList";
import  Newsletter  from "../home/Newsletter"
const Drop = () => {
  return (
    <div>
      <div className="lg:inline-flex md:block hidden">
        <Link to="home">
          <span className="text-[24px] font-[500] leading-[51.5px] text-[#BCB7B7] hover:opacity-75">
            Home/
          </span>
        </Link>
        <Link to="auction">
          <span className="text-[24px] font-[500] leading-[51.5px] text-[#BCB7B7] hover:opacity-75">
            Auctions/
          </span>
        </Link>
        <Link to="">
          <span className="text-[24px] font-[500] leading-[51.5px] text-[#BCB7B7] hover:opacity-75">
            Live bid/
          </span>
        </Link>
        <span className="text-[24px] font-[500] leading-[51.5px] text-[#333333]">
          Drop{" "}
        </span>
      </div>

      <div className="text-center place-items-center justify-center grid items-center">
        <h1 className="text-[30px] lg:text-[48px] md:text-[40px] text-[#000000] lg:leading-[84.24px] leading-[51.5px] md:leading-[71.5px] lg:font-[500] font-[700] md:font-[600]">
          Upcoming drops
        </h1>
        <p className="mt-[30px] lg:text-[32px] md:text-[20px] text-[18px] text-[#616161] lg:leading-[64px] leading-[28.26px] font-[400] w-[291px] lg:w-[713px] md:w-[613px]">
          Turn on notifications so that no drops will miss you.
        </p>
        <button className="mt-[30px] border rounded-md text-[#000000] w-[262px] md:w-[362px] lg:w-[420px] h-[52.4px] md:h-[72.4px] lg:h-[84px] lg:text-[36px] text-[22.46px] md:text-[30px] hover:bg-[#4693ED] hover:text-[#ffff] transition-all duration-300">
          Notify me
        </button>
      </div>

      <DropList />
     <Newsletter/>
    </div>
  );
};

export default Drop;
