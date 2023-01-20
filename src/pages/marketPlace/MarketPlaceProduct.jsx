import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { SiPrisma } from "react-icons/si";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MarketPlaceProduct = () => {
  const exploreArr = [
    {
      id: 1,
      name: "sassy",
      price: 3.2,
      img: "https://res.cloudinary.com/dpokiomqq/image/upload/v1673542632/Rectangle_65_dka2or.png",
    },
    {
      id: 2,
      name: "sassy",
      price: 0.03,
      img: "https://res.cloudinary.com/dpokiomqq/image/upload/v1673542640/Rectangle_66_mqkh2c.png",
    },
    {
      id: 3,
      name: "maple",
      price: 3.2,
      img: "https://res.cloudinary.com/dpokiomqq/image/upload/v1673542643/Rectangle_69_ysejo7.png",
    },
    {
      id: 4,
      name: "David",
      price: 2.2,
      img: "https://res.cloudinary.com/dpokiomqq/image/upload/v1673542960/Rectangle_62_lcgybe.png",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full">
      <div className="flex items-center space-x-1 md:space-x-2 mt-5 md:mt-6 border-b md:border-none border-grey pb-3 md:p-0">
        <Link to="/" className="text-fadeLink capitalize text-sm md:text-base ">
          home/
        </Link>
        <Link to="/" className="text-fadeLink capitalize text-sm md:text-base ">
          marketplace/
        </Link>
        <Link to="/" className="text-fadeLink capitalize text-sm md:text-base ">
          editorials/
        </Link>
        <p className="capitalize text-pureBlack font-semibold text-sm md:text-base">
          philomena '22
        </p>
      </div>
      <div className="md:mt-8 md:border md:border-confusedBlack w-full md:flex md:h-[600px] ">
        <div className="w-full md:w-2/5 md:border-r md:border-confusedBlack h-full pt-5 md:py-5 px-3 overflow-hidden">
          <div className="w-full h-[350px] md:h-full">
            <img
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673542628/Rectangle_300_yfrj7f.png"
              alt="pelomena"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:hidden flex items-center justify-between py-5">
            <p className="uppercase text-confusedBlack font-semibold text-sm">
              philomena '22
            </p>
            <p className="text-confusedBlack font-semibold text-sm">$21.00</p>
          </div>
        </div>
        <div className="w-full md:w-3/5 h-full">
          <div className="border-b border-confusedBlack py-6 px-3 space-x-16 md:flex items-center hidden">
            <h2 className="capitalize text-2xl font-bold">boolean egyptian</h2>
            <p className="space-x-3 flex items-center">
              <SiPrisma className="text-xl text-confusedBlack" />
              <span className="font-semibold text-lg text-confusedBlack">
                0.09
              </span>
            </p>
          </div>
          <div className="px-3 md:py-8 md:px-5 space-y-4 md:border-b md:border-confusedBlack">
            <p className="capitalize text-[#616161] font-semibold md:font-normal">
              creator: <span className="text-[#4693ED]">Ali Dawa</span>
            </p>
            <p className="text-pureBlack">Made in Italy</p>
            <p className="text-pureBlack md:font-semibold">
              Total views: <span className="font-normal">1.7k views</span>
            </p>
            <div className="flex items-center space-x-3">
              <button className="font-semibold text-2xl text-pureBlack bg-[transparent] border-none">
                -
              </button>
              <input
                type="text"
                placeholder="1"
                className="text-xl w-10 focus:outline-none text-center"
              />
              <button className="font-semibold text-2xl text-pureBlack bg-[transparent] border-none">
                +
              </button>
            </div>
            <div className="flex space-x-3">
              <button className="bg-blue text-[white] w-40 md:w-48 h-12 text-center flex items-center justify-center space-x-2 rounded md:rounded-none">
                <span>Add to cart</span>{" "}
                <BsArrowRight className="hidden md:block" />
              </button>
              <button className="border border-confusedBlack w-16 h-12 flex justify-center items-center rounded md:rounded-none">
                <BsHeart className="text-2xl text-confusedBlack " />
              </button>
            </div>
          </div>
          <div className="flex py-6 px-5 mt-10 md:mt-0 border-t md:border-t-0 border-b border-confusedBlack capitalize text-confusedBlack justify-between items-center cursor-pointer">
            <p className="text-lg font-semibold">description</p>
            <MdKeyboardArrowDown className="text-2xl" />
          </div>
          <div className="flex py-6 px-5 border-b border-confusedBlack capitalize text-confusedBlack justify-between items-center cursor-pointer">
            <p className="text-lg font-semibold">listings</p>
            <MdKeyboardArrowDown className="text-2xl" />
          </div>
          <div className="flex py-6 px-5 capitalize border-b border-confusedBlack md:border-b-0 text-confusedBlack justify-between items-center cursor-pointer">
            <p className="text-lg font-semibold">status</p>
            <MdKeyboardArrowDown className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="my-16 shadow-3xl py-4 hidden md:flex items-center justify-between rounded-lg px-4">
        <p className="text-confusedBlack font-semibold text-lg">
          Explore more of this collection
        </p>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center border border-confusedBlack cursor-pointer">
            <SlArrowLeft className="text-confusedBlack" />
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center border border-confusedBlack cursor-pointer">
            <SlArrowRight className="text-confusedBlack" />
          </div>
        </div>
      </div>
      <div className="explore-carousel mt-20 md:mt-0">
        <p className="md:hidden text-pureBlack py-5 font-semibold text-lg">
          More from this collection
        </p>
        <Carousel responsive={responsive} className="mb-14">
          {exploreArr.map(({ id, name, price, img }) => {
            return (
              <div
                className="px-5 py-3 border border-confusedBlack space-y-4"
                key={id}
              >
                <p className="flex justify-end">
                  <BsHeart className="text-xl" />
                </p>
                <div className="w-72 h-72 overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="capitalize text-confusedBlack font-semibold text-lg">
                    {name}
                  </p>
                  <p className="text-confusedBlack font-semibold text-lg flex items-center space-x-2">
                    <SiPrisma />
                    <span>{price.toFixed(2)}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="text-center">
        <button className="bg-gradient-to-b from-[#78A3AD] to-[#C056097D] w-44 h-14 text-lg rounded-xl font-semibold relative p-[2px]">
          <div className=" w-full h-full bg-[white] rounded-xl"></div>
          <p className="bg-gradient-to-r from-[#78A3AD] to-[#C056097D] explore absolute top-[50%] left=[60%] translate-x-[55%] translate-y-[-50%]">
            Explore all
          </p>
        </button>
      </div>
    </div>
  );
};

export default MarketPlaceProduct;
