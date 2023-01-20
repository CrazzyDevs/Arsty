import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsFilter } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";
import { productsArr } from "./data";
import { Link } from "react-router-dom";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MarketPlace = () => {
  const cartArr = [
    {
      id: 1,
      name: "editorial",
      checked: true,
    },
    {
      id: 2,
      name: "fashion",
      checked: true,
    },
    {
      id: 3,
      name: "optics",
      checked: false,
    },
    {
      id: 4,
      name: "art & museum",
      checked: false,
    },
    {
      id: 5,
      name: "nature",
      checked: false,
    },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full my-8">
        <div className="w-1/5 relative text-grey">
          <FiSearch className="absolute top-1/2 -translate-y-1/2 left-6 text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="bg-lightGrey rounded-lg w-44 pl-14 pr-5 py-3 focus:outline-none"
          />
        </div>
        <div className="w-3/4 px-8 flex items-center justify-between shadow-3xl rounded-xl h-16">
          <p className="text-pureBlack">See 1-6 0f 15 results</p>
          <div className="flex items-center border border-darkGrey w-32 py-2 rounded-lg cursor-pointer space-x-2 justify-center">
            <p className="font-semibold text-pureBlack">Sort by</p>
            <MdKeyboardArrowDown className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between mb-20">
        <div className="w-1/5">
          <div className="w-11/12">
            <div className="py-2 border-b-4 border-[#AFB091] space-x-3 flex items-center  text-pureBlack mb-8">
              <BsFilter className="text-2xl" />
              <h1 className="text-xl font-semibold">Filter</h1>
            </div>
            <div className="space-y-8">
              <div className="flex items-center justify-between cursor-pointer">
                <p className="font-semibold text-lg text-pureBlack">
                  By category
                </p>
                <MdKeyboardArrowUp className="text-2xl text-pureBlack" />
                {/* <MdKeyboardArrowDown className="text-2xl text-pureBlack" />  */}
              </div>
              <div className="space-y-3">
                {cartArr.map(({ id, name, checked }) => {
                  return (
                    <div className="flex items-center relative" key={id}>
                      <input
                        type="checkbox"
                        className="w-4 h-4 opacity-0 absolute cursor-pointer"
                        value={name}
                      />
                      <div className="w-5 h-5 bg-[#D9D9D9] mr-3 flex items-center rounded cursor-pointer">
                        {checked && (
                          <BsCheck className="text-pureBlack text-xl" />
                        )}
                      </div>
                      <label className="text-black capitalize">{name}</label>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between cursor-pointer mb-8">
                <p className="font-semibold text-lg text-pureBlack">By price</p>
                <MdKeyboardArrowUp className="text-2xl text-pureBlack" />
                {/* <MdKeyboardArrowDown className="text-2xl text-pureBlack" />  */}
              </div>
              <div className="space-y-6">
                <p className="text-black">$100.00 - $150.00</p>
                <div className="flex items-center relative">
                  <div className="w-full h-1.5 bg-[#B8BCB5] absolute z-10"></div>
                  <div className="w-[55%] h-1.5 bg-confusedBlack absolute z-10"></div>
                  <div className="w-6 h-6 border-2 z-20 border-confusedBlack bg-[white] rounded-full"></div>
                  <div className="w-6 h-6 ml-[55%] absolute z-30 bg-confusedBlack rounded-full cursor-pointer"></div>
                </div>
              </div>
              <div className="flex items-center justify-between cursor-pointer">
                <p className="font-semibold text-lg text-pureBlack">
                  By artist
                </p>
                <MdKeyboardArrowUp className="text-2xl text-pureBlack" />
                {/* <MdKeyboardArrowDown className="text-2xl text-pureBlack" />  */}
              </div>
              <div className="space-y-3">
                <p className="border-b border-b-pureBlack inline">All</p>
                <button
                  value={100}
                  className="capitalize bg-[transparent] border-none block"
                >
                  below $100.00
                </button>
                <button
                  value={150}
                  className="capitalize bg-[transparent] border-none block"
                >
                  $100.00 - $150.00{" "}
                </button>
                <button
                  value={200}
                  className="capitalize bg-[transparent] border-none block"
                >
                  $150.00 - $200.00{" "}
                </button>
                <button
                  value={201}
                  className="capitalize bg-[transparent] border-none block"
                >
                  above $200.00{" "}
                </button>
              </div>
              <div className="flex items-center justify-between cursor-pointer">
                <p className="font-semibold text-lg text-pureBlack">
                  Collection year
                </p>
                {/* <MdKeyboardArrowUp className="text-2xl text-pureBlack" /> */}
                <MdKeyboardArrowDown className="text-2xl text-pureBlack" /> 
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 p-3 flex justify-between flex-wrap gap-y-10">
          {productsArr.map(({ id, name, price, img }) => {
            return (
              <Link to={"/marketplace/1"}>
                <div
                  className="w-60 shadow-xl p-3 rounded-lg cursor-pointer"
                  key={id}
                >
                  <div className="w-full h-60 mb-3 overflow-hidden rounded-lg">
                    <LazyLoadImage
                      src={img}
                      alt={name}
                      effect="blur"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="uppercase mb-3">{name}</p>
                  <p className="font-bold text-lg">${price.toFixed(2)}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full text-center mb-10">
        <button className="w-40 font-medium rounded-md py-3 border border-confusedBlack">
          See more
        </button>
      </div>
    </div>
  );
};

export default MarketPlace;
