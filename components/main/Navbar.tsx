"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[65px]  fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a
            href="#about-me"
            className="h-auto md:flex lg:flex w-auto flex flex-row items-center"
          >
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-bounce"
            />

            <span className="font-bold ml-[10px] md:block text-gray-300">
              Ayush
            </span>
          </a>

          <div className=" w-[50vh] h-full flex flex-row items-center justify-between md:hidden sm:hidden lg:flex ">
            <div className="lg:flex md:hidden hidden  items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e]  px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#about-me" className="cursor-pointer ">
                About me
              </a>
              <a href="#skills" className="cursor-pointer ">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer ">
                Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1OOZ7zVMmsqcEoiPKyuxVViRdWjNp1HAL/view?pli=1"
                className="cursor-pointer   "
              >
                Resume
              </a>
            </div>
          </div>

          <div className="flex sm:flex-nowrap justify-center flex-row gap-2">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                onClick={() => window.open(social.onclick, "_blank")}
                width={24}
                height={24}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
