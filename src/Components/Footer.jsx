import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      {/* Desxtop footer */}
      <div class="lg:flex justify-around lg:mt-[60px] md:mt-[50px] md:flex hidden">
        {/* logo */}
        <div className="mt-[163px] lg:block md:hidden">
          <img
            src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673377046/ARTSY._s8cq92.png"
            alt="logo"
          />
        </div>

        <div>
          <ul>
            <li className="cursor-pointer font-[500] leading-[35px] lg:text-[26px] md:text-[19px]  text-[#333333] hover:opacity-50 w-[69px] h-[35px] mt-[50px]">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer font-[500] leading-[35px] lg:text-[26px] md:text-[19px] text-[#333333] hover:opacity-50 w-[94px] h-[35px] mt-[18px]">
              <Link to="/auction">Auctions</Link>
            </li>
            <li className="cursor-pointer font-[500] leading-[35px] lg:text-[26px] md:text-[19px] text-[#333333] hover:opacity-50 w-[13418] h-[35px] mt-[26px]">
              <Link to="/marketplace">MarketPlace</Link>
            </li>
            <li className="cursor-pointer font-[500] leading-[35px] lg:text-[26px] md:text-[19px] text-[#333333] hover:opacity-50 w-[65px] h-[35px] mt-[18px]">
              <Link to="/drop">Drop</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="cursor-pointer font-[500] leading-[35px] lg:text-[26px] md:text-[19px]  text-[#333333] hover:opacity-50 w-[69px] h-[35px] mt-[50px]">
              <Link to="/">Blog</Link>
            </li>
            <li className="cursor-pointer font-[500] leading-[35px] lg:text-[26px] md:text-[19px] text-[#333333] hover:opacity-50 w-[94px] h-[35px] mt-[18px]">
              <Link to="/auction">Wallets</Link>
            </li>
            <li className="cursor-pointer font-[500] leading-[35px] lg:text-[26px] md:text-[19px] text-[#333333] hover:opacity-50 w-[134px] h-[35px] mt-[26px]">
              <Link to="/marketplace">Rates</Link>
            </li>
            <li className="cursor-pointer font-[500] leading-[35px] lg:text-[26px] md:text-[19px] text-[#333333] hover:opacity-50 w-[109px] h-[35px] mt-[18px]">
              <Link to="/drop">High bids</Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="mt-[60px]">
          <div className="flex">
            <AiOutlineMail className="w-[41px] h-[34px]" />
            <p className="text-[26px] text-[#333333] leading-[35.1px] font-[400] mx-[20px]">
              artsystudios@gmail.com
            </p>
          </div>

          <div className="mt-[50px] flex">
            <MdOutlineLocationOn className="w-[41px] h-[58px]" />
            <p className="text-[26px] text-[#333333] leading-[35.1px] font-[400] mx-[20px] flex items-center justify-center place-items-center">
              Lagos, Nigeria.
            </p>
          </div>
        </div>
      </div>
      <p className="text-[#989998] font-[500] font-[switzer] text-[24px] mt-[91px] text-center lg:block md:block hidden">
        Artsystudios © 2022. All Rights Reserved.
      </p>
      {/* end */}

      {/* Mobile footer */}
      <div className="mb-[50px] lg:hidden md:hidden block mt-[29px] px-2">
        <p className="uppercase font-[300] text-[11.64px] leading-[17.46px] text-[#333333]">
          Reach us
        </p>
        {/* Address */}
        <div className="mt-[18px]">
          <div className="flex">
            <AiOutlineMail className="w-[20.3px] h-[18px]" />
            <p className="text-[11.64px] text-[#333333] leading-[15.71px] font-[400] mx-[15px]">
              artsystudios@gmail.com
            </p>
          </div>

          <div className="mt-[25px] flex">
            <MdOutlineLocationOn className="w-[18px] h-[21px]" />
            <p className="text-[11.64px] text-[#333333] leading-[15.71px] font-[400] mx-[15px] flex items-center justify-center place-items-center">
              Lagos, Nigeria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
