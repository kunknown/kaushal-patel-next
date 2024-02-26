import React from "react";

export default function Home() {
  return (
    <div
      id="home-page-container"
      className="mx-auto my-16 w-full h-screen container flex flex-col items-center overflow-y-auto overscroll-auto scrollbar-none"
    >
      <div
        className="w-full min-h-screen bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/bulb-earth_1920.jpg)`,
          opacity: "65%",
        }}
      >
        <div className="h-full flex items-center justify-center text-6xl md:text-9xl text-white">
          Welcome!
        </div>
      </div>
      <div className="px-2 md:px-4 py-12 md:py-16 text-xl md:text-4xl text-center">
        I am an entrepreneurial-minded, senior full-stack software engineer with
        a strong drive for efficient problem-solving, a passion for writing
        clean and efficient code, and a desire for continuous learning and
        innovation.
      </div>
      <div
        className="w-full min-h-[300px] bg-fixed bg-center be-cover bg-no-repeat"
        style={{ backgroundImage: `url(/futuristic_1920.jpg)`, opacity: "65%" }}
      ></div>
      <div className="px-2 md:px-4 py-12 md:py-16 text-xl md:text-4xl text-center">
        My proficiency lies in JavaScript and its frameworks. Specifically,
        React, Next, and Node. I also have a strong interest in Python and its
        frameworks.
      </div>
      <div
        className="w-full min-h-[300px] bg-fixed bg-center be-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/kush_2024_cartoon.png)`,
          opacity: "65%",
        }}
      ></div>
      <div className="px-2 md:px-4 py-12 md:py-16 text-xl md:text-4xl text-center">
        This website is my personal project in works. I will be updating and
        improving it over time with new features and mini-projects.
      </div>
      <div
        className="w-full min-h-[500px] text-9xl bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/bulb-earth_1920.jpg)`,
          opacity: "65%",
        }}
      ></div>
    </div>
  );
}
