import React from "react";
import CommingSoon from "../Button/CommingSoon";

const BuyNow = () => {
  return (
    <section className="px-[2rem] lg:px-[6rem] py-[3rem] lg:py-[5.5rem] bg-[#120E0A] text-[#FFFFFF] w-full flex flex-col items-center">
      <div className="flex flex-col lg:flex-row bg-[#1D1915] p-7 md:p-14 gap-8 md:gap-16 shadow-lg rounded-lg">
        <div className="lg:w-1/2 bg-[#252525] rounded-lg h-[245px] lg:h-auto lg:flex-1"></div>
        <div className="lg:w-1/2 text-[20px] md:text-[34px] lg:text-[40px] leading-[28px] md:leading-[45px] lg:leading-[52px] font-medium text-center lg:text-start">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
          <div className="mt-8 md:mt-10">
            <CommingSoon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyNow;
