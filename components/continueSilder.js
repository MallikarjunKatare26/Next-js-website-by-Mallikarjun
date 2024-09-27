import React from "react";
import Image from "next/image";

const Slider = ({ text, ImageSidler }) => {
  // here i store the data in component only, because we do not have API
  const images = [
    { imageUrl: "/images/drawinbox.png", imageAlt: "Drawinbox" },
    { imageUrl: "/images/wipro.png", imageAlt: "Wipro" },
    { imageUrl: "/images/Sequoia-logo.png", imageAlt: "Sequoia" },
    { imageUrl: "/images/indeed.png", imageAlt: "Indeed" },
    { imageUrl: "/images/my11cricle.png", imageAlt: "My11cricle" },
    { imageUrl: "/images/ikea.png", imageAlt: "IKEA" },
    { imageUrl: "/images/indiagold.png", imageAlt: "Indiagold" },
    { imageUrl: "/images/healthifyme.png", imageAlt: "Healthifyme" },
    { imageUrl: "/images/Swiggy-logo.png", imageAlt: "Healthifyme" },
  ];

  const marqueeText = "Unleash Visual Impact | Unleash Visual Impact";

  return (
    <div>
      <>
        {ImageSidler && (
          <div className="marquee">
            <div className="flex animate-marquee whitespace-nowrap gap-x-14 items-center">
              {images.map((pic, index) => (
                <div
                  className="relative w-36 lg:w-auto lg:h-auto overflow-hidden"
                  key={index}
                >
                  <Image
                    key={index}
                    src={pic.imageUrl}
                    alt={pic.imageAlt}
                    layout="intrinsic"
                    width={250}
                    height={150}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </>
      {text && (
        <div className={`marquee bg-black py-6 lg:py-[46px]`}>
          <div className="scrollText text-4xl lg:text-[68px] lg:leading-[74px] font-medium text-white flex items-center">
            {marqueeText}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
