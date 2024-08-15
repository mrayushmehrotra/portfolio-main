"use client";
import React, { useRef } from "react";
import HeroContent from "../sub/HeroContent";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".video", {
      y: 1000,
      duration: 5,
    });
  });

  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="video absolute top-0 left-0 w-full h-full lg:flex object-cover hidden "
        style={{ zIndex: -1 }}
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
