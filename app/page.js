import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ShowReel from "@/components/showReel";
import Global from "@/components/global";
import Carousel from "@/components/carousel";
import Faqs from "@/components/faqs";
import ContentWithForm from "@/components/contentWithForm";
import ContinueSilder from "@/components/continueSilder";
import ImageWithAccordion from "@/components/imageWithAccordion";

const CarouselData = [
  {
    image: "/images/Lissa-Smith.jpg",
    title: "Lissa Smith,",
    companyName: "VYMO",
    designation: "Director of Marketing and Communications",
    description:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled",
  },
  {
    image: "/images/Slissa-Smith.jpg",
    title: "Sissa Lenin,",
    companyName: "MOTO",
    designation: "Director of Sales and Communications",
    description:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled",
  },
  {
    image: "/images/Smith-Lars.avif",
    title: "Smith lars,",
    companyName: "TATA",
    designation: "Director of Marketing and Communications",
    description:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled",
  },
];

export default function Home() {
  return (
    <>
      <div className="px-5 lg:px-[90px] w-full mt-9">
        <h1 className="font-medium text-7xl lg:text-[104px] lg:leading-[112px] lg:w-[1046px] uppercase">
          We are a <br/> Global <div className="text-[#EF001C] break-all md:break-normal">Production </div>
          AGENCY
        </h1>
        <div className="flex flex-col justify-center items-center gap-y-5 md:gap-y-0 lg:flex-row lg:justify-between lg:items-end">
          <div className="mt-12">
            <p className="lg:w-[725px] text-2xl font-semibold">
              Designed with the specific needs of large B2B enterprises in mind,
              our platform offers a comprehensive solution to simplify.
            </p>
            <div className="flex flex-col lg:flex-row mt-10 gap-y-8 lg:gap-5">
              <Link
                href="#"
                className="bg-[#EF001C] text-white py-5 px-8 w-fit rounded-full inline-flex gap-x-[10px] font-bold justify-center items-center"
              >
                GET PROFESSIONAL VIDEO SERVICES <ArrowRight />
              </Link>
              <div className="flex flex-row justify-center items-center gap-x-1">
                <div className="flex justify-center items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white z-10">
                    <Image
                      src="/images/Marin.png"
                      alt="Marin Image"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% -3%"
                      className="scale-150"
                    />
                  </div>
                  <div className="relative w-12 h-12 rounded-full overflow-hidden right-2">
                    <Image
                      src="/images/Ayesha.png"
                      alt="Ayesha Image"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 5%"
                      className="scale-150 z-0"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h6 className="font-medium">Marin / Ayesha</h6>
                  <span className="text-[#11101099]">Global Services</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative w-[300px] h-[150px] overflow-hidden rounded-xl">
              <Image
                src="/images/showReel.png"
                alt="showReel Image"
                layout="fill"
                objectFit="cover"
                className="scale-150"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <ShowReel />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 lg:mt-[120px] h-[120px] lg:h-[140px]">
        <ContinueSilder ImageSidler={true} />
      </div>

      <div className="px-5 lg:px-[90px] mt-[30px]">
        <h2 className="text-4xl lg:text-[52px] lg:leading-[56px] w-full lg:w-[725px] font-medium">
          Our expertise and passion breathe life into your narratives
        </h2>
        <div className="mt-16">
          <ImageWithAccordion />
        </div>
      </div>

      <div className="px-5 lg:px-[90px] mx-auto mt-14 lg:mt-32">
        <Global />
      </div>

      <div className="px-5 lg:px-[90px] mx-auto mt-14 lg:mt-32">
        <Carousel items={CarouselData} />
      </div>

      <div className="px-5 lg:px-[90px] mt-14 lg:mt-32">
        <Faqs />
      </div>

      <div className="px-5 lg:px-[65px] mt-14 lg:mt-[120px] bg-[#F1F2F6]">
        <ContentWithForm />
      </div>

      <div>
        <ContinueSilder text={true} />
      </div>
    </>
  );
}