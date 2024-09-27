import Link from "next/link";
import React from "react";

const footer = () => {
  let footerMenu = [
    { title: "COMPANY", list: [{ link: "Who Are We", linkHref: "#" }] },
    { title: "RESOURCES", list: [{ link: "Blog", linkHref: "#" }] },
    {
      title: "WORK",
      list: [
        { link: "vidoe", linkHref: "#" },
        { link: "shoot", linkHref: "#" },
        { link: "post", linkHref: "#" },
      ],
    },
    {
      title: "SERVICES",
      list: [
        { link: "vidoe", linkHref: "#" },
        { link: "shoot", linkHref: "#" },
        { link: "post", linkHref: "#" },
      ],
    },
    {
      title: "CONTACT",
      list: [
        { link: "Talk to us", linkHref: "#" },
        { link: "Collab", linkHref: "#" },
      ],
    },
  ];

  return (
    <div className="px-5 lg:px-[90px]">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 py-10 lg:pt-20 lg:pb-[78px] border-b">
        {footerMenu.map((menu, index) => (
          <div className="flex flex-col gap-y-[26px]" key={index}>
            <p className="font-medium text-2xl leading-6 mt-2.5 lg:mt-0">
              {menu.title}
            </p>
            <div className="flex flex-col gap-y-2">
              {menu.list.map((link, index) => (
                <Link href={link.linkHref} key={index}>{link.link}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="pt-8 pb-[38px] flex flex-col lg:flex-row lg:justify-between items-center gap-y-2">
        <span>Copyright ©2024 Red Bangle</span>
        <div className="inline-flex lg:gap-x-8 flex-col lg:flex-row justify-center items-center gap-y-2">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Legal</Link>
          <Link href="#">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
};

export default footer;
