import { React, useState } from "react";
import { dropData } from "./data";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

const DropList = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState(dropData);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    if (event.target.value === "") {
      setFilteredData(dropData);
    } else {
      setFilteredData(
        dropData.filter((item) => item.button === event.target.value)
      );
    }
  };

  return (
    <div>
      <label>
        <select
          value={selectedCategory}
          onChange={handleChange}
          className="mt-[20px] font-semibold text-pureBlack flex items-center border border-darkGrey w-32 py-2 rounded-lg cursor-pointer space-x-2 justify-center"
        >
          <option value="">Sort by</option>
          <option value="upcoming">upcoming</option>
          <option value="Ended">Ended</option>
          <option value="live now">live now</option>
        </select>
      </label>

      <div className="mt-[87px] place-items-center justify-center grid items-center gap-[139px]">
        {filteredData.map((items) => (
          <div key={items.id}>
            <div className="grid lg:grid-cols-2 gap-[42px]">
              <div className="relative">
                <LazyLoadImage
                  src={items.img}
                  effect="blur"
                  className="w-[398px] lg:w-[683px] h-[224px] lg:h-[441px] rounded-[10px] object-cover"
                />
                <div className="absolute inset-0 p-5">
                  <div className="justify-end flex mr-[27px] lg:hidden ">
                    <button className="w-[103px] h-[23px] bg-[#4693ED] text-[#FFFFFF] text-[12px] font-[500] leading-[14.52px] rounded-[5px]">
                      {items.button}
                    </button>
                  </div>
                  <div className="flex justify-center text-white p-5 place-items-center mt-[69px] lg:mt-[249px]">
                    <div className="w-[370px] h-[72px] lg:w-[478px] lg:h-[121px] bg-[#FFFFFF]/20 rounded-[10px] border border-[#FFFFFF] mr-[30px] lg:mr-0 ">
                      <p className="lg:text-[28px] text-[16px] md:text-[20px] lg:leading-[49.14px] text-[#FFFFFF] lg:mx-[34px] mx-[30px] md:mx-[32px]  mt-[4px] md:mt-[10px] lg:mt-[17px]">
                        {items.title}
                      </p>
                      <div className="flex lg:items-center lg:place-items-center lg:text-center lg:justify-center text-start">
                        <p className="text-[#FFFFFF] lg:text-[30px] text-[22px] md:text-[20px] font-[stix] lg:leading-[54px] lg:mx-[34px] mx-[30px] md:mx-[32px]">
                          {items.time}
                        </p>
                        <button className="bg-[#4693ED] text-[#FFFFFF] w-[107px] h-[35px] text-[18px] rounded-full hover:text-black hidden lg:block">
                          {items.prompt}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button className="w-[189px] h-[43px] bg-[#4693ED] text-[#FFFFFF] text-[18px] font-[500] leading-[21.78px] rounded-[10px] hover:rounded-full hover:text-black transition-all duration-300 hidden lg:block">
                  {items.prompt}
                </button>
                <h3 className="text-[16px] lg:text-[20px] md:text-[19px] leading-[21.6px] lg:leading-[27px] md:leading-[20px] text-[#000000] font-[400] mt-[33px]">
                  {items.time}
                </h3>

                <h4 className="font-[500] text-[24px] lg:text-[36px] md:text-[30px] leading-[32.4px] lg:leading-[48.6px] md:leading-[40px] text-[#000000] mt-[30px]">
                  {items.event}
                </h4>

                <p className="text-[15px] lg:text-[20px] md:text-[19px] leading-[23.55px] lg:leading-[31.4px] md:leading-[29px] text-[#616161] font-[400] mt-[30px] lg:w-[433px] md:w-[400px]  w-[335px] lg:h-[101px] h-[72px] md:h-[99px]">
                  {items.text}
                </p>

                <p className="font-[500] text-[#000000] lg:leading-[37.68px] leading-[31.4px] md:leading-[30px] lg:text-[24px] text-[20px] md:text-[22px] mt-[30px]">
                  Creator :{" "}
                  <span className="text-[#006CA2]">{items.creator}</span>
                </p>

                <p className="text-[#006CA2] lg:text-[20px] text-[16px] md:text-[18px] lg:leading-[31.4px] md:leading-[29.12px] leading-[25.12px] mt-[30px] underline cursor-pointer hover:opacity-75">
                  {items.prompt}
                </p>
              </div>
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropList;
