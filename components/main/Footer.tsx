"use client";
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";

const Footer = () => {
  return (
    <div>
      <center>
        <div className="pb-10 z-40 m-8 ">
          <div
            className=" flex items-center justify-center flex-col h-full w-full"
            id="about-me"
          >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
              Github Contribution
            </h1>
            <div className="z-50">
              <GitHubCalendar
                username="mrayushmehrotra"
                blockSize={15}
                blockMargin={4}
                fontSize={20}
                hideMonthLabels
                hideTotalCount
                hideColorLegend
              />
            </div>
          </div>
        </div>
      </center>
      <div className="lg:hidden  fixed left-7  bottom-0   md:flex sm:flex z-20  flex items-center justify-center  gap-x-5 pb-5 w-fit   ">
        <div className=" z-20  w-[50vh] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="z-20  flex items-center justify-between  mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 w-full h-auto border border-[#7042f861] bg-[#0300145e]  ">
            <a href="#about-me" className="cursor-pointer ">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1OOZ7zVMmsqcEoiPKyuxVViRdWjNp1HAL/view?pli=1"
              className="cursor-pointer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
