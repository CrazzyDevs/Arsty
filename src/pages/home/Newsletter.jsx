import React from "react";

const Newsletter = () => {
  return (
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
  );
};

export default Newsletter;
