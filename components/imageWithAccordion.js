"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";

const ImageWithAccordion = () => {

  const [isOpen, setIsOpen] = useState(0);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const accordionData = [
    {
      question: "Innovative",
      answer:
        "Creation, ensuring your messages resonate worldwide. From concept to distribution, our platform serves as your strategic partner.",
      imageUrl: "/images/Lissa-Smith.jpg",
      imageAlt: "Image 1",
    },
    {
      question: "Reliable",
      answer:
        "Creation, ensuring your messages resonate worldwide. From concept to distribution, our platform serves as your strategic partner.",
      imageUrl: "/images/mask-group1.avif",
      imageAlt: "Image 2",
    },
    {
      question: "Quality",
      answer:
        "Creation, ensuring your messages resonate worldwide. From concept to distribution, our platform serves as your strategic partner.",
      imageUrl: "/images/mask-group2.avif",
      imageAlt: "Image 3",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="relative w-full h-[250px] lg:w-[484px] lg:h-[451px] overflow-hidden">
        <Image
          src={accordionData[isOpen]?.imageUrl || accordionData[0].imageUrl}
          alt={accordionData[isOpen]?.imageAlt || accordionData[0].imageAlt}
          height={451}
          width={484}
        />
      </div>
      <div>
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`border-b py-8 ${(index == 0) ? "border-t" : ""}`}
          >
            {isOpen !== index && (
              <h4
                className="cursor-pointer font-bold"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
              </h4>
            )}
            {isOpen === index && (
              <div className="mt-2 flex flex-col">
                <span className="text-[#EF001C] font-medium text-xl lg:mt-8 e2">{`0${
                  index + 1
                }`}</span>
                <h4 className="text-[32px] leading-[38px] font-medium mt-6">
                  {item.question}
                </h4>
                <p className="text-lg leading-[26px] text-[#111010CC] mt-5">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageWithAccordion;
