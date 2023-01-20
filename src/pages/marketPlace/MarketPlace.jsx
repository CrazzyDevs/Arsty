import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsFilter } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";
import { productsArr } from "./data";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

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
      <div className="items-center justify-between w-full my-8 hidden md:flex">
        <div className="w-1/5 relative text-grey">
          <FiSearch className="absolute top-1/2 -translate-y-1/2 left-6 text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="bg-lightGrey rounded-lg w-44 pl-14 pr-5 py-3 focus:outline-none"
          />
        </div>
        <div className="md:w-4/6 lg:w-3/4 px-5 lg:px-8 flex items-center justify-between shadow-3xl rounded-xl h-16">
          <p className="text-pureBlack">See 1-6 0f 15 results</p>
          <div className="flex items-center border border-darkGrey w-32 py-2 rounded-lg cursor-pointer space-x-2 justify-center">
            <p className="font-semibold text-pureBlack">Sort by</p>
            <MdKeyboardArrowDown className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="md:hidden w-full mt-10 space-y-6">
        <div className="flex space-x-2 items-center">
          <Link
            to="/"
            className="text-fadeLink capitalize text-sm md:text-base "
          >
            home/
          </Link>
          <Link
            to="marketplace"
            className="text-fadeLink capitalize text-sm md:text-base "
          >
            marketplace/
          </Link>
          <p className="capitalize text-pureBlack font-semibold text-sm md:text-base">
            editorial
          </p>
        </div>
        <p className="text-fadeLink italic">Showing 1-5 of 18 results</p>
      </div>
      <div className="px-5 flex items-center justify-between shadow-3xl rounded-xl h-14 mt-3 w-full md:hidden mb-2">
        <div className="flex items-center py-2 rounded-lg cursor-pointer space-x-2 justify-center">
          <p className="font-medium text-pureBlack">Filters</p>
          <MdKeyboardArrowDown className="text-2xl" />
        </div>
        <div className="flex items-center py-2 rounded-lg cursor-pointer space-x-2 justify-center">
          <p className="font-medium text-pureBlack">Sort by</p>
          <MdKeyboardArrowDown className="text-2xl" />
        </div>
      </div>
      <div className="w-full flex lg:justify-between md:mb-20">
        <div className="w-1/5 hidden md:block">
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
                  className="capitalize text-left border-none block"
                >
                  $100.00 - $150.00{" "}
                </button>
                <button
                  value={200}
                  className="capitalize text-left bg-[transparent] border-none block"
                >
                  $150.00 - $200.00{" "}
                </button>
                <button
                  value={201}
                  className="capitalize text-left bg-[transparent] border-none block"
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
        <div className="w-full md:w-4/5 lg:w-3/4 md:p-3 p-6 md:mt-0 flex justify-between flex-wrap gap-y-10">
          {productsArr.map(({ id, name, price, img }) => {
            return (
              <Link to={"/marketplace/1"} className="md:w-60 w-full">
                <div
                  className="md:shadow-xl md:p-3 md:rounded-lg cursor-pointer"
                  key={id}
                >
                  <div className="w-full h-96 md:h-60 mb-3 overflow-hidden md:rounded-lg">
                    <img
                      src={img}
                      alt={name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex md:block justify-between w-full">
                    <p className="uppercase mb-3">{name}</p>
                    <p className="md:font-bold text-lg">${price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full md:hidden px-5 mt-5">
        <Link to={'/'}>
          <div className="space-x-5 flex justify-end items-center">
            <p className="text-pureBlack">Load more</p>
            <div className="w-12 h-12 rounded-full flex items-center justify-center border border-confusedBlack">
              <BsArrowRight className="text-confusedBlack text-xl" />
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full text-center mb-10 hidden md:block">
        <button className="w-40 font-medium rounded-md py-3 border border-confusedBlack">
          See more
        </button>
      </div>
    </div>
  );
};

export default MarketPlace;
