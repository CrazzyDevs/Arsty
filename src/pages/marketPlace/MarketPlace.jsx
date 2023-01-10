import { FiSearch } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsFilter } from "react-icons/bs";
import { productsArr } from "./data";

const MarketPlace = () => {
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
          <div className="relative flex items-center">
            <select className="border  w-32 py-2 rounded-lg font-medium pl-7 appearance-none cursor-pointer focus:outline-none">
              <option value="sortBy">Sort by</option>
            </select>
            <RiArrowDownSLine className="absolute right-7 text-xl" />
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
            <div className="">
              <div className="flex items-center justify-between cursor-pointer mb-8">
                <p className="font-semibold text-lg text-pureBlack">
                  By category
                </p>
                <MdKeyboardArrowUp className="text-2xl text-pureBlack" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="accent-{pink} w-4 h-4 focus:accent-pink-500"
                    // checked
                  />
                  <label className="text-black">Editorials</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 p-3 flex justify-between flex-wrap gap-y-10">
          {productsArr.map(({ id, name, price, img }) => {
            return (
              <div
                className="w-60 shadow-xl p-3 rounded-lg cursor-pointer"
                key={id}
              >
                <div className="w-full h-60 mb-3 overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="uppercase mb-3">{name}</p>
                <p className="font-bold text-lg">${price.toFixed(2)}</p>
              </div>
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
