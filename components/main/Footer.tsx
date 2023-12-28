"use client";
import React from "react";
import GitHubCalendar from "react-github-calendar";
const Footer = () => {
  return (
    <div className="pb-10">
      <center>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
          Github Contribution
        </h1>
        <GitHubCalendar
          username="mrayushmehrotra"
          blockSize={15}
          blockMargin={4}
          fontSize={20}
          hideMonthLabels
          hideTotalCount
          hideColorLegend
        />
      </center>
    </div>
  );
};

export default Footer;
