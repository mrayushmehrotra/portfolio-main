"use client";
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const Footer = () => {
  const [showGithub, setShowGithub] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [btnText, setBtnText] = useState("Unlock");

  function getGithub() {
    setShowGithub(!showGithub);
    setShowVideo(!showVideo);
    setBtnText(btnText === "Unlock" ? "Lock" : "Unlock");
  }

  return (
    <center>
      <div className="pb-10 z-40">
        <div
          className=" flex items-center justify-center flex-col h-full w-full"
          id="about-me"
        >
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
            Github Contribution
          </h1>
          {showVideo && (
            <video
              id="video"
              onClick={getGithub}
              muted
              loop
              autoPlay
              className=""
            >
              <source src="/encryption.webm" type="video/webm" />
            </video>
          )}
          {showGithub && (
            <GitHubCalendar
              username="mrayushmehrotra"
              blockSize={15}
              blockMargin={4}
              fontSize={20}
              hideMonthLabels
              hideTotalCount
              hideColorLegend
            />
          )}
          <motion.a
            onClick={getGithub}
            variants={slideInFromLeft(1)}
            className="p-3 mt-4 z-30 font-semibold button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            {btnText}
          </motion.a>
        </div>
      </div>
    </center>
  );
};

export default Footer;
