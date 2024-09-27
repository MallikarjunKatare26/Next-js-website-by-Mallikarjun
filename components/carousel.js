"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="text-[#EF001C] text-xl font-semibold flex items-center gap-x-3">
        <div className="border border-[#EF001C] w-[54px] h-0"></div>
        <h3 className="tracking-wider o2">TESTIMONY FROM OUR PARTNERS</h3>
      </div>
      <div className="flex flex-col justify-center w-full mt-8">
        <div className="flex flex-col lg:flex-row overflow-hidden justify-between gap-8">
          <div className="basic-1/2">
            <div className="relative w-full h-[250px] md:w-full md:h-2/3 lg:w-[484px] lg:h-[517px] overflow-hidden">
              <Image
                src={items[currentIndex].image}
                alt="carousel item"
                className="w-full h-full object-cover object-top"
                width={484}
                height={517}
              />
            </div>
          </div>
          <div className="basis-2/3 items-stretch flex flex-col justify-between">
            <p className="font-semibold text-xl lg:text-[24px] lg:leading-[41px]">
              {items[currentIndex].description}
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col justify-center mt-10">
                <h4 className="text-[28px] leading-[32px] font-bold o2">
                  {items[currentIndex].title}{" "}
                  <span className="text-[18px] leading-[26px]">
                    {items[currentIndex].companyName}
                  </span>
                </h4>
                <span className="text-[18px] leading-[26px] font-semibold text-[#111010CC]">
                  {items[currentIndex].designation}
                </span>
              </div>
              <div className="flex justify-end items-end gap-4 lg:gap-[4.6px] mt-10 lg:mt-0">
                <button
                  onClick={handlePrev}
                  className="px-6 py-4 rounded-[34px] border-[1.6px] border-[#111010] hover:border-[#EF001C] hover:bg-[#EF001C] hover:text-white"
                >
                  <ArrowLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-4 rounded-[34px] border-[1.6px] border-[#111010] hover:border-[#EF001C] hover:bg-[#EF001C] hover:text-white"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
