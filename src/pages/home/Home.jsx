import React from "react";
import Carosuel from "./Carousel";

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
        <Carosuel />
      </div>

      <div className="mt-[112px] text-[#292929] text-[28px] font-[700] leading-[43.88px]">
        <h3>Featured products</h3>

        <hr className="text-[#333333] mt-[37px] lg:w-[1200.06px] hidden lg:block md:block" />

        <div className="grid lg:grid-cols-2">
          {/* card content */}
          <div className="lg:mt-[60px]">
            {/* image content */}
            <div className="mt-[30px] lg:hidden md:hidden block">
              <div className="flex justify-center items-center place-items-center mt-[50px]">
                <h3 className=" mt-[35%] text-center text-[#FFFFFF] text-[30px] leading-[36.9px] font-[clash]">
                  Boolean Egyptian
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
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673287167/Rectangle_236_cklqlh.png"
              alt="girl"
              className="lg:hidden md:hidden block"
            />

            {/* Desxtop image */}
            <img
              src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673043075/image1_h3mp1a.png"
              alt="girl"
              className="hidden md:block lg:block"
            />
          </div>
          {/* end of card content */}

          {/* <div className="lg:mt-[61px] mt-[18px]">
            <h3 className="mx-[37px] hidden lg:block md:block font-[700] font-[switzer] text-[40px] leading-[50px] text-[#333333]">
              The Boolean Egyptian
            </h3>
            <p className="lg:mx-[37px] lg:mt-[38px] lg:font-[400] lg:text-[#333333] text-[15px] lg:text-[24px] text-[#616161] leading-[23.25px] lg:leading-[32.4px] lg:w-[540px] lg:h-[128px] w-[343px] h-[92px] text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className="flex mx-[37px] mt-[28px]">
              <div className="flex">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673084432/Rectangle_84_irxgh2.png"
                  alt="picture"
                  className="rounded-full w-[41px] h-[41px] object-cover border-[#78A3AD]"
                />
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
              <h5 className="text-[24px] text-[#333333] lg:leading-[32px] lg:mx-[32px] lg:w-[193px] font-[500] w-[193px] ">64 major creators</h5>
               <div className="border border-[#333333] rounded-[50%] w-[78px] h-[78px] text-[#333333]">
                <img
                  src="https://res.cloudinary.com/dpokiomqq/image/upload/v1673301079/Vector_lf9pxy.png"
                  alt="arrow"
                  className="w-[40px] h-[26px] mt-[26px] mx-[16px]"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
