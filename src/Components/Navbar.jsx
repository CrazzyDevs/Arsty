import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiSearch, FiShoppingCart, FiBell } from "react-icons/fi";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-[100%] h-[80px] z-10 lg:mt-[52px]">
      <div className="md:px-8 flex place-items-center justify-between items-center mt-[20px]">
        {/* Menubar*/}
        <div className="md:hidden" onClick={handleClick}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Logo */}
        <div className="flex items-center ">
          <div className="font-bold flex justify-center items-center">
            <h1 className="lg:text-3xl md:text-2xl text-[24px] font-[sentient] text-center ">
              ARSTY.
            </h1>
          </div>{" "}
        </div>

        {/* Nav Navlinks */}
        <ul className="hidden md:flex lg:gap-[47px] md:gap-[10px]">
          <li className="cursor-pointer font-[500] leading-[32px] lg:text-[24px] md:text-[16px]  text-[#292929">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="cursor-pointer font-[500] leading-[32px] lg:text-[24px] md:text-[16px] text-[#292929]">
            <NavLink to="/marketPlace">MarketPlace</NavLink>
          </li>
          <li className="cursor-pointer font-[500] leading-[32px] lg:text-[24px] md:text-[16px] text-[#292929]">
            <NavLink to="/auction">Auctions</NavLink>
          </li>
          <li className="cursor-pointer font-[500] leading-[32px] lg:text-[24px] md:text-[16px] text-[#292929]">
            <NavLink to="/drop">Drop</NavLink>
          </li>
        </ul>

        {/* Icons */}
        <ul className="flex lg:gap-[31px] md:gap-[10px] gap-[12px]">
          <li>
            <FiSearch className="cursor-pointer lg:w-[28px] lg:h-[28px] w-[16px]" />
          </li>
          <li>
            <NavLink to="/marketplace">
              <FiShoppingCart className="cursor-pointer lg:w-[28px] lg:h-[28px] w-[17px]" />
            </NavLink>
          </li>
          <li className="hidden md:flex">
            <NavLink to="/drop">
              <FiBell className="cursor-pointer lg:w-[28px]  lg:h-[28px] w-[20px]" />
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile nav */}
      <ul
        className={
          !nav ? "hidden" : "absolute w-full px-8 h-[736px] bg-[#fff] top-0 z-10"
        }
      >
        {/* Menubar*/}
        <div className="flex justify-between mt-[20px]">
          <div className="flex items-center ">
            <div className="lg:pl-[120px] font-bold">
              <h1 className="lg:text-3xl md:text-2xl mr-4 text-[24px] font-[sentient]">
                ARSTY.
              </h1>
            </div>
          </div>

          <div className="md:hidden" onClick={handleClick}>
            {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
          </div>
        </div>

        <li className="cursor-pointer font-[500] leading-[32px] lg:text-[24px] md:text-[19px]  text-[#292929] w-[65px] h-[52px] mt-[50px]">
          <Link onClick={handleClose} to="/">
            Home
          </Link>
        </li>
        <li className="cursor-pointer font-[500] leading-[32px] lg:text-[24px] md:text-[19px] text-[#292929] w-[94px] h-[52px] mt-[18px]">
          <Link onClick={handleClose} to="/auction">
            Auctions
          </Link>
        </li>
        <li className="cursor-pointer font-[500] leading-[32px] lg:text-[24px] md:text-[19px] text-[#292929] w-[134px] h-[52px] mt-[24px]">
          <Link onClick={handleClose} to="/marketplace">
            MarketPlace
          </Link>
        </li>
        <li className="cursor-pointer font-[500] leading-[32px] lg:text-[24px] md:text-[19px] text-[#292929] w-[65px] h-[52px] mt-[18px]">
          <Link onClick={handleClose} to="/drop">
            Drop
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
