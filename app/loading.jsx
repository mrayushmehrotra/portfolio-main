"use client";
import { useEffect, useRef } from "react";

export default function Loading() {
  const hasPlayed = useRef(false);

  useEffect(() => {
    const playbackConst = 300; // Adjusted for smoother playback
    const setHeight = document.getElementById("set-height");
    const vid = document.getElementById("v0");

    // Set page height according to video duration
    const handleLoadedMetadata = () => {
      setHeight.style.height = `${Math.floor(vid.duration) * playbackConst}px`;
    };

    vid.addEventListener("loadedmetadata", handleLoadedMetadata);

    // Smooth scrolling and video play (only on first render)
    const scrollPlay = () => {
      if (!hasPlayed.current) {
        const frameNumber = window.pageYOffset / playbackConst;
        vid.currentTime = frameNumber;
        vid.play();
        hasPlayed.current = true;
      }
      window.requestAnimationFrame(scrollPlay);
    };

    window.requestAnimationFrame(scrollPlay);

    // Cleanup event listeners on component unmount
    return () => {
      vid.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <>
      <div id="set-height"></div>
      <p id="time"></p>
      <video id="v0" tabIndex="0" preload="auto">
        <source type="video/mp4" src="/first_loader.mp4" />
      </video>
    </>
  );
}
