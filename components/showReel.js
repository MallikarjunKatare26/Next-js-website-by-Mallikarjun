"use client";
import { Play, PlayIcon, XIcon } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const PlayShowreelButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>    
      <button
        onClick={handleOpen}
        className="bg-[#FFFFFF26] text-white rounded-[32px] px-6 py-3 flex top-[40%] gap-x-2">
          <PlayIcon/> Play Showreel
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="bg-white p-4 rounded shadow-lg max-w-lg w-full">
            <div className="flex justify-end">
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <XIcon/>
              </button>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <video width="600" controls>
                <source src="/videos/bear-video.mp4" type="video/mp4" />
                <source src="/videos/bear-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayShowreelButton;
