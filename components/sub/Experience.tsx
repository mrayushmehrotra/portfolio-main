"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
const Experience = () => {
  return (
    <div className="flex-col flex items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Experience
      </motion.div>

      <div className="mt-8"></div>
      <div className="flex items-center justify-center">
        <div className="m-3   p-4 rounded-lg  ">
          <h2 className=" text-[20px]  font-semibold text-stone-200">
            CodeTikki, SWE-Intern, Remote
          </h2>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            Implemented clean code by using react components and prop drilling,
            Created employee feature in admin panel, Fixed responsiveness of
            complete admin dashboard and it&apos;s routes and optimise it by 30
            percent
          </motion.p>
        </div>
        <div className="m-3  p-4 rounded-lg  ">
          <h2
            onClick={() =>
              window.open(
                "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Lyft/xSw9echtixLAoPdsH_Lyft_Zyj746CAXJ5BbCdCK_1700289748124_completion_certificate.pdf",
                "_blank"
              )
            }
            className=" text-[20px] cursor-pointer  font-semibold text-white    "
          >
            Lyft - Back-End Engineering Job Simulation.
          </h2>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            Lyft Back-End Engineering Virtual Experience Program held by Forage.
            A program that consists of 4 chapter, namely: software architecture,
            refactoring, unit-testing, and test-driven-development.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
