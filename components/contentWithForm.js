import React from "react";
import Image from "next/image";
import ContactForm from "@/components/contactForm";

const contentWithForm = () => {
  let personInfo = [
    {
      imageUrl: "/images/Marin.png",
      imageAlt: "Milly",
      content:
        "All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.",
      NameWithPosition: "Milly Cyrus, Global Lead",
    },
    {
      imageUrl: "/images/Ayesha.png",
      imageAlt: "Vinita",
      content:
        "All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.",
      NameWithPosition: "Vinita Singh, Asst. Global Lead",
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between pt-20 pb-24">
        <div className="basis-1/2">
          <h2 className="uppercase lg:w-[358px] tracking-tighter text-4xl lg:text-[64px] lg:leading-[68px] font-medium">
            lets start something <span className="text-[#EF001C]">new</span>{" "}
            together
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {personInfo.map((data) => (
              <div className="border-l ps-6 my-2" key={data.NameWithPosition}>
                <div className="relative w-[70px] h-[70px] rounded-full overflow-hidden">
                  <Image
                    src={data.imageUrl}
                    alt={data.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 5%"
                    className="scale-150"
                  />
                </div>
                <p className="my-4 text-[#1E1F1FB2] text-[13px] leading-[19px]">
                  {data.content}
                </p>
                <p className="text-sm	font-medium leading-[19px]">
                  {data.NameWithPosition}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 mt-10">
          <span className="text-2xl font-semibold leading-[26px]">
            Give us few details and we’ll get in touch
          </span>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default contentWithForm;
