"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const portfolio = "<portfolio/>";
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex sm:flex-col md:lg:flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="flex Welcome-box py-[8px] px-[7px]  opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[#b49bff] text-[18px]">
            Ayush Mehrotra Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing&nbsp; the best &nbsp;
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {portfolio} <br />
            </span>
            exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg  text-gray-400 my-5 max-w-[600px]"
        >
          Hi, I am Ayush Mehrotra and I&apos;m a Full Stack Software Engineer
          with expertise in Web & Mobile App Development.
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
