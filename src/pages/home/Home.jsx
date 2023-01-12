import React from "react";
import Carosuel from "./Carousel";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="px-2">
      {/* Hero */}
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

      {/* Carosuel */}
      <div>
        <Carosuel />
      </div>

      {/* cards */}
      <div className="mt-[112px] text-[#292929] text-[28px] font-[700] leading-[43.88px]">
        <h3>Featured products</h3>

        {/* Cards  */}

        {/* card 1 */}
        <hr className="text-[#333333] mt-[37px] max-w-full hidden lg:block md:block" />
        <div className="grid lg:grid-cols-2">
          {/* card content */}
          <div className="lg:mt-[60px] md:mt-[30px]">
            {/* image content */}
            <div className="mt-[30px] lg:hidden md:hidden block relative">
              <div className="flex justify-center items-center place-items-center mt-[50px]">
                <h3 className=" mt-[35%] text-center text-[#FFFFFF] text-[30px] leading-[36.9px] font-[clash] absolute">
                  Boolean Egyptian
                </h3>
              </div>

              <div className="border rounded-full absolute w-[78px] h-[78.75px] text-[#FFFFFF] mt-[137px] mx-[264px]">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673288348/Vector_a3oz6z.png"
                  alt="arrow"
                  className="w-[40px] h-[26.25px] mt-[26px] mx-[19px] hover:opacity-80"
                />
              </div>
            </div>

            {/* Mobile image */}
            <img
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673287167/Rectangle_236_cklqlh.png"
              alt="girl"
              className="lg:hidden md:hidden block"
            />

            {/* Desxtop image */}
            <div className="group">
              <div className="relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673043075/image1_h3mp1a.png"
                  alt="girl"
                  className="hidden md:block lg:block"
                />
                <div className="absolute w-full h-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[#ffff] font-[stix]">View products</p>
                  <Link to="marketplace">
                    <img
                      src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673428485/Group_499_wcomix.png"
                      alt="arrow"
                      className="mx-5 fill-[#ffff] cursor-pointer w-[53px] h-[53px] mr-[55px] hover:opacity-75 inline-block"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* end of card content */}

          {/* under content card */}
          <div className="lg:mt-[61px] mt-[18px]">
            <h3 className="md:mx-[20px] lg:mx-[37px] hidden lg:block md:block font-[700] font-[stix] text-[40px] leading-[50px] text-[#333333]">
              The Boolean Egyptian
            </h3>
            <p className="md:mx-[20px] lg:mx-[37px] lg:mt-[38px] md:mt-[20px] lg:font-[400] lg:text-[#333333] text-[15px] lg:text-[24px] text-[#616161] leading-[23.25px] lg:leading-[32.4px] lg:w-[540px] lg:h-[128px] w-[343px] h-[92px] text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 lg:mx-[37px] mt-[28px] place-items-center justify-center text-center gap-5">
              <div className="flex relative">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673084428/Rectangle_82_cc3kxf.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover z-40  border-[#78A3AD]"
                />
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673084425/Rectangle_87_kbxcpb.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover z-30 border border-[#78A3AD]"
                />
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673083921/Rectangle_66_zwayn8.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover z-20 border border-[#78A3AD]"
                />
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673083705/Rectangle_251_w99hca.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover z-10 border border-[#78A3AD]"
                />
               
              </div>
              <div className="flex">
                <h5 className="lg:text-[24px] text-[16px] lg:text-[#333333] text-[#000000] leading-[22px] lg:leading-[32px] lg:mx-[32px] lg:w-[193px] font-[500] w-[129px] h-[22px] lg:h-[32px]">
                  64 major creators
                </h5>
                
              </div>
              <div className="border border-[#333333] rounded-[50%] w-[78px] h-[78px] text-[#333333] hidden lg:block md:block">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673301079/Vector_lf9pxy.png"
                  alt="arrow"
                  className=" cursor-pointer w-[40px] h-[26px] mt-[26px] mx-[16px] hover:opacity-80"
                />
              </div>
            </div>
            <hr className="text-[#333333] mt-[17px] w-[294px] md:hidden lg:hidden block " />
          </div>
          {/* end of under content card */}
        </div>

        {/* <div className="">
            <img
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673043075/image1_h3mp1a.png"
              alt="girl"
              className="hidden md:block lg:block"
            />
        </div> */}

        {/* Card 2 */}
        <hr className="text-[#333333] mt-[37px] max-w-full hidden lg:block md:block" />
        <div className="grid lg:grid-cols-2">
          {/* untop in large screen content card */}
          <div className="lg:mt-[61px] mt-[18px] hidden lg:block md:block">
            <h3 className="hidden lg:block md:block font-[700] font-[stix] text-[40px] leading-[50px] text-[#333333]">
              The Boolean Egyptian
            </h3>
            <p className="lg:mt-[38px] md:mt-[20px] lg:font-[400] lg:text-[#333333] text-[15px] lg:text-[24px] text-[#616161] leading-[23.25px] lg:leading-[32.4px] lg:w-[540px] lg:h-[128px] w-[343px] h-[92px] text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 mt-[28px] place-items-center justify-center text-center gap-5">
              <div className="flex">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673084428/Rectangle_82_cc3kxf.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover  border-[#78A3AD]"
                />
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673084425/Rectangle_87_kbxcpb.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover border border-[#78A3AD]"
                />
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673083921/Rectangle_66_zwayn8.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover border border-[#78A3AD]"
                />
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673083705/Rectangle_251_w99hca.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover border border-[#78A3AD]"
                />
              </div>
              <div>
                <h5 className="lg:text-[24px] text-[16px] lg:text-[#333333] text-[#000000] leading-[22px] lg:leading-[32px] lg:mx-[32px] lg:w-[193px] font-[500] w-[129px] h-[22px] lg:h-[32px]">
                  64 major creators
                </h5>
              </div>
              <div className="border border-[#333333] rounded-[50%] w-[78px] h-[78px] text-[#333333] hidden lg:block md:block">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673301079/Vector_lf9pxy.png"
                  alt="arrow"
                  className=" cursor-pointer w-[40px] h-[26px] mt-[26px] mx-[16px] hover:opacity-80"
                />
              </div>
            </div>
          </div>
          {/* untop in large screen content card */}

          {/* card content */}
          <div className="lg:mt-[61px] md:mt-[30px]">
            {/* image content */}
            <div className="mt-[30px] lg:hidden md:hidden block">
              <div className="flex justify-center items-center place-items-center mt-[50px]">
                <h3 className=" mt-[35%] text-center text-[#FFFFFF] text-[30px] leading-[36.9px] font-[clash] absolute">
                  Are We There Yet?{" "}
                </h3>
              </div>

              <div className="border rounded-full absolute w-[78px] h-[78.75px] text-[#FFFFFF] mt-[137px] mx-[264px]">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673288348/Vector_a3oz6z.png"
                  alt="arrow"
                  className="cursor-pointer w-[40px] h-[26.25px] mt-[26px] mx-[19px] hover:opacity-80"
                />
              </div>
            </div>

            {/* Mobile image */}
            <img
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673331671/Rectangle_230_eqilf9.png"
              alt="girl"
              className="lg:hidden md:hidden block"
            />

            {/* Desxtop image */}

            <div className="group">
              <div className="relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673043093/oldimage_itt9cu.png"
                  alt="girl"
                  className="hidden md:block lg:block"
                />
                <div className="absolute w-full h-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[#ffff] font-[stix]">View products</p>
                  <Link to="marketplace">
                    <img
                      src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673428485/Group_499_wcomix.png"
                      alt="arrow"
                      className="mx-5 fill-[#ffff] cursor-pointer w-[53px] h-[53px] mr-[55px] hover:opacity-75 inline-block"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* end of card content */}

          {/* under content card */}
          <div className="lg:mt-[61px] mt-[18px] lg:hidden md:hidden block">
            <h3 className="md:mx-[20px] lg:mx-[37px] hidden lg:block md:block font-[700] font-[stix] text-[40px] leading-[50px] text-[#333333]">
              The Boolean Egyptian
            </h3>
            <p className="md:mx-[20px] lg:mx-[37px] lg:mt-[38px] md:mt-[20px] lg:font-[400] lg:text-[#333333] text-[15px] lg:text-[24px] text-[#616161] leading-[23.25px] lg:leading-[32.4px] lg:w-[540px] lg:h-[128px] w-[343px] h-[92px] text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 lg:mx-[37px] mt-[28px] place-items-center justify-center text-center gap-5">
              <div className="flex">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673084428/Rectangle_82_cc3kxf.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover  border-[#78A3AD]"
                />
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673084425/Rectangle_87_kbxcpb.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover border border-[#78A3AD]"
                />
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673083921/Rectangle_66_zwayn8.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover border border-[#78A3AD]"
                />
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673083705/Rectangle_251_w99hca.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover border border-[#78A3AD]"
                />
              </div>
              <div>
                <h5 className="lg:text-[24px] text-[16px] lg:text-[#333333] text-[#000000] leading-[22px] lg:leading-[32px] lg:mx-[32px] lg:w-[193px] font-[500] w-[129px] h-[22px] lg:h-[32px]">
                  64 major creators
                </h5>
              </div>
              <div className="border border-[#333333] rounded-[50%] w-[78px] h-[78px] text-[#333333] hidden lg:block md:block">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673301079/Vector_lf9pxy.png"
                  alt="arrow"
                  className="w-[40px] h-[26px] mt-[26px] mx-[16px] hover:opacity-80"
                />
              </div>
            </div>
            <hr className="text-[#333333] mt-[17px] w-[294px] md:hidden lg:hidden block" />
          </div>
          {/* end of under content card */}
        </div>

        {/* card 3 */}
        <hr className="text-[#333333] mt-[37px] max-w-full hidden lg:block md:block" />
        <div className="grid lg:grid-cols-2">
          {/* card content */}
          <div className="lg:mt-[60px] md:mt-[30px]">
            {/* image content */}
            <div className="mt-[30px] lg:hidden md:hidden block">
              <div className="flex justify-center items-center place-items-center mt-[50px]">
                <h3 className=" mt-[35%] text-center text-[#FFFFFF] text-[30px] leading-[36.9px] font-[clash] absolute">
                  Oloibiri 1997
                </h3>
              </div>

              <div className="border rounded-full absolute w-[78px] h-[78.75px] text-[#FFFFFF] mt-[137px] mx-[264px]">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673288348/Vector_a3oz6z.png"
                  alt="arrow"
                  className="w-[40px] h-[26.25px] mt-[26px] mx-[19px]"
                />
              </div>
            </div>

            {/* Mobile image */}
            <img
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673332451/Rectangle_230_1_hlk5fl.png"
              alt="eygpt"
              className="lg:hidden md:hidden block"
            />

            {/* Desxtop image */}
            <div className="group">
              <div className="relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673043071/eygpt_jtohb9.png"
                  alt="eygpt"
                  className="hidden md:block lg:block"
                />
                <div className="absolute w-full h-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[#ffff] font-[stix]">View products</p>
                  <Link to="marketplace">
                    <img
                      src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673428485/Group_499_wcomix.png"
                      alt="arrow"
                      className="mx-5 fill-[#ffff] cursor-pointer w-[53px] h-[53px] mr-[55px] hover:opacity-75 inline-block"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* end of card content */}

          {/* under content card */}
          <div className="lg:mt-[61px] mt-[18px]">
            <h3 className="md:mx-[20px] lg:mx-[37px] hidden lg:block md:block font-[700] font-[stix] text-[40px] leading-[50px] text-[#333333]">
              The Boolean Egyptian
            </h3>
            <p className="md:mx-[20px] lg:mx-[37px] lg:mt-[38px] md:mt-[20px] lg:font-[400] lg:text-[#333333] text-[15px] lg:text-[24px] text-[#616161] leading-[23.25px] lg:leading-[32.4px] lg:w-[540px] lg:h-[128px] w-[343px] h-[92px] text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 lg:mx-[37px] mt-[28px] place-items-center justify-center text-center gap-5">
              <div className="flex">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673084428/Rectangle_82_cc3kxf.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover  border-[#78A3AD]"
                />
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673084425/Rectangle_87_kbxcpb.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover border border-[#78A3AD]"
                />
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673083921/Rectangle_66_zwayn8.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover border border-[#78A3AD]"
                />
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673083705/Rectangle_251_w99hca.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover border border-[#78A3AD]"
                />
              </div>
              <div>
                <h5 className="lg:text-[24px] text-[16px] lg:text-[#333333] text-[#000000] leading-[22px] lg:leading-[32px] lg:mx-[32px] lg:w-[193px] font-[500] w-[129px] h-[22px] lg:h-[32px]">
                  64 major creators
                </h5>
              </div>
              <div className="border border-[#333333] rounded-[50%] w-[78px] h-[78px] text-[#333333] hidden lg:block md:block">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673301079/Vector_lf9pxy.png"
                  alt="arrow"
                  className="cursor-pointer w-[40px] h-[26px] mt-[26px] mx-[16px] hover:opacity-80"
                />
              </div>
            </div>
            <hr className="text-[#333333] mt-[17px] w-[159px] md:hidden lg:hidden block" />
          </div>
          {/* end of under content card */}
        </div>
      </div>

      {/* <div className="lg:mt-[200px] mt-[100px] relative">
        <div className="absolute">
           <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673334848/Rectangle_90_ocxe6k.png" alt="bg" className="h-[336px]"/>
        </div>
         <div className="place-items-center justify-center flex items-center absolute">
          <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673044148/monalisa_rizbkl.png" alt="img bg" className=" w-[347px] h-[269px] object-cover mx-[33px] mt-[34px]"/>
        </div>
      </div>  */}

      <div className="lg:mt-[200px] mt-[100px]">
        <div className="lg:block hidden">
          <div className="relative overflow-hidden">
            <img
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673334848/Rectangle_90_ocxe6k.png"
              alt="bg img"
            />
            <div className="absolute flex items-center justify-center -bottom-10 opacity-100 place-items-center m-20">
              <div className="lg:w-[1000px] lg:h-[546px] grid items-start justify-start place-items-start text-start">
                <p className="lg:text-[40px] lg:leading-[54px] text-[#FFFFFF]">
                  See Upcoming Auctions and Exhibitions
                </p>
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673430562/Arrow_3_jcjlg1.png"
                  alt="arrow"
                />
                <div className="relative">
                  <div className="grid items-end justify-end ">
                    <img
                      src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673044148/monalisa_rizbkl.png"
                      alt="img bg"
                      className="lg:w-[1200px] lg:h-[446px] w-[347px] h-[269px] object-cover"
                    />
                    <div className=" absolute items-start justify-start place-items-start lg:mx-[72px]">
                      <img
                        src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673431361/Ellipse_6_a0du0m.png"
                        alt="circle"
                        className="w-[15.97px] h-[15.97px] mx-[12px]"
                      />
                      <h3 className=" text-[#FFFFFF] font-[400] lg:text-[29.23px] lg:w-[353.88px]">
                        MONALISA REDEFINED IN STYLE.
                      </h3>
                      <div className="grid grid-cols-2 justify-between">
                        <div className="col-span-2...">
                          <p className="lg:w-[428px] lg:h-[81.14px] text-[#FFFFFF] font-[500] lg:leading-[21.41px] lg:text-[15.86px] ">
                            GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND
                            CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE
                            WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.
                          </p>
                        </div>

                        <div className="flex justify-end">
                          <Link to="auction">
                            <p className="text-[24px] font-[400] text-[#FFFFFF] lg:leading-[32.4px] underline w-[100px]">
                              See more
                            </p>
                          </Link>

                          <button className="border text-[#ffff] rounded-md h-[62px] w-[181px] text-[24px] leading-[32.4px] font-[400] mx-[42px]">
                            set a reminder
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* marketplace and auction */}
      <div className="mt-[100px]">
        <hr className="text-[#292929] mt-[37px] max-w-full" />
        <div className="flex justify-between lg:mt-[59px] md:mt-[40px] mt-[24px]">
          <h1 className="font-[500] text-[20px] leading-[32.4px] lg:leading-[64.8px] lg:text-[48px] md:text-[30px] w-full lg:mx-[79px]">
            Explore marketplace
          </h1>
          <div className="text-[#292929] lg:hidden md:hidden block">
            <Link to="marketplace">
              <img
                src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673348986/Group_518_q72wzw.png"
                alt="arrow"
                className=" cursor-pointer w-[53px] h-[53px] mr-[55px] hover:opacity-75"
              />
            </Link>
          </div>
          <div className="hidden lg:block md:block lg:mt-[15px] lg:mr-[293px]">
            <Link to="marketplace">
              <img
                src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673336972/Vector_1_kh86lc.png"
                alt="lg arrow"
                className="lg:w-[81px] md:w-[50px] hover:opacity-75"
              />
            </Link>
          </div>
        </div>

        <hr className="text-[#292929] mt-[37px] max-w-full" />
        <div className="flex justify-between lg:mt-[59px] md:mt-[40px] mt-[24px]">
          <h1 className="font-[500] text-[24px] w-[221px] h-[32px] leading-[32.4px] lg:mx-[79px] lg:text-[48px] md:text-[30px] lg:leading-[64.8px] lg:w-full ">
            See auctions
          </h1>
          <div className="text-[#292929] lg:hidden md:hidden block">
            <Link to="auction">
              <img
                src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673348986/Group_518_q72wzw.png"
                alt="arrow"
                className="cursor-pointer  w-[53px] h-[53px] mr-[35px] hover:opacity-75"
              />
            </Link>
          </div>

          <div className="hidden lg:block md:block lg:mt-[15px] lg:mr-[293px]">
            <Link to="auction">
              <img
                src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673336972/Vector_1_kh86lc.png"
                alt="lg arrow"
                className="w-[81px] md:w-[50px] hover:opacity-75"
              />
            </Link>
          </div>
        </div>
        <hr className="text-[#292929] mt-[37px] max-w-full" />
      </div>

      {/* Newsletter */}
      <div className="lg:border md:border rounded-[#333333] lg:w-full lg:h-[320px] md:h-[300px] mt-[100px]">
        <h3 className="font-[400] lg:text-[30.21px] text-[24px] lg:leading-[39.06px] leading-[31.03px] text-[#333333] lg:mt-[62px] md:mt-[50px] lg:text-center md:text-center uppercase">
          NewsLetter
        </h3>
        <p className="lg:mt-[20px] mt-[12px] font-[400] lg:text-[32px] lg:leading-[43.2px] text-[#333333] text-center hidden lg:block md:block">
          Subscribe to get daily updates on new drops & exciting deals{" "}
        </p>
        <p className="mt-[12px] leading-[15.71px] text-[11.64px] font-[400] w-[319.69px] h-[16px] text-[#333333] lg:hidden md:hidden">
          SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS
        </p>

        <form className="lg:text-center lg:mt-[34px] mt-[25px] md:text-center lg:flex grid gap-6 md:place-items-center md:justify-center">
          <input
            type="text"
            required
            placeholder="ENTER YOUR EMAIL"
            className="w-[340px] lg:w-[446px] h-[46px] lg:h-[60px] border-[#333333] border outline-[#333333] px-4 text-[16px] text-[#333333] font-[400]"
          />
          <button
            type="submit"
            className="lg:mx-[23px] gap-0 bg-[#272727] text-[#FFFFFF] w-[181.63px] h-[60px] text-[16px] lg:leading-[20.69px] font-[400] uppercase mt-[26px] md:mt-0 lg:mt-0 hover:opacity-75"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
