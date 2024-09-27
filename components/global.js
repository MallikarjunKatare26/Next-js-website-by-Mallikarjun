import { list } from "postcss";
import React from "react";

const global = () => {
  let data = [
    { count: "60", content: "brands partnered with" },
    { count: "3K", content: "brand content assets created" },
    { count: "1K", content: "global partners and collaborators" },
    { count: "100", content: "cities wordwide" },
  ];

  return (
    <>
      <div className="text-[#EF001C] text-xl font-semibold flex items-center gap-x-3">
        <div className="border border-[#EF001C] w-[54px] h-0"></div>
        <h3 className="tracking-wider o2">WE ARE GLOBAL</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 mt-[30px] e2">
        {data.map((list, index) => (
          <div className="inline-flex flex-col lg:flex-row gap-y-3 items-stretch" key={index}>
            <div className="flex flex-col items-center md:items-start gap-y-3">
              <div className="text-[86px] leading-[88px] inline-flex">
                {list.count} <span className="text-[#EF001C]">+</span>
              </div>
              <p className="text-[24px] leading-[28px] tracking-[0.004em] font-medium text-center md:text-left">
                {list.content}
              </p>
            </div>
            {index < 3 && (
              <span className="border-y lg:border-x mx-[63px] lg:h-[43px] lg:w-0 w-[73px] my-auto"></span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default global;
