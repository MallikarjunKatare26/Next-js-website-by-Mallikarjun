'use client'

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
  };

  return (
    <div className="w-full flex flex-row justify-between items-center border-b px-4 lg:px-[90px] pt-[22px] pb-[31px]">
      <div className="flex items-center">
        <div className="relative w-[209px] h-[38px] overflow-hidden">
          <Image
            src="/images/company-logo.png"
            alt="Company Logo"
            layout="fill"
            objectFit="center"
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex flex-row justify-center items-center gap-x-10">
          <Link href="#" className="flex">
            SERVICES <ArrowUpRight />
          </Link>
          <Link href="#" className="flex">
            WORK <ArrowUpRight />
          </Link>
          <Link href="#" className="flex">
            ABOUT <ArrowDownRight className="text-red-500" />{" "}
          </Link>
          <Link
            href="#"
            className="bg-[#EF001C] py-[10px] px-[16px] rounded-full text-white"
          >
            GET STARTED
          </Link>
        </div>
      </div>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-xl ml-auto">
          {isMobileMenuOpen ? <X /> : <span>&#9776;</span>}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center gap-y-6 pt-20 z-50">
          <div className="relative w-[209px] h-[38px] overflow-hidden mb-6">
            <Image
              src="/images/company-logo.png"
              alt="Company Logo"
              layout="fill"
              objectFit="center"
            />
          </div>
          <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-2xl">
            <X />
          </button>
          <Link href="#" className="flex">
            SERVICES <ArrowUpRight />
          </Link>
          <Link href="#" className="flex">
            WORK <ArrowUpRight />
          </Link>
          <Link href="#" className="flex">
            ABOUT <ArrowDownRight className="text-red-500" />{" "}
          </Link>
          <Link
            href="#"
            className="bg-[#EF001C] py-[10px] px-[16px] rounded-full text-white"
          >
            GET STARTED
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;