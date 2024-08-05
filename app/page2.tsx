"use client";
import { Button, Image } from "@nextui-org/react";
import classNames from "classnames";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef, useEffect, PropsWithChildren } from "react";

/*
I am an entrepreneurial-minded, senior full-stack software engineer with
        a strong drive for efficient problem-solving, a passion for writing
        clean and efficient code, and a desire for continuous learning and
        innovation.
My proficiency lies in JavaScript and its frameworks. Specifically,
        React, Next, and Node. I also have a strong interest in Python and its
        frameworks.
This website is my personal project in works. I will be updating and
        improving it over time with new features and mini-projects.
*/

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  console.log("scrollYProgress", scrollYProgress);
  const mageRef = useRef<HTMLDivElement>(null);
  const homePageContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollDownRef = useRef<HTMLDivElement | null>(null);
  const hunterRef = useRef<HTMLImageElement | null>(null);
  const swordRef = useRef<HTMLImageElement | null>(null);
  const dragonRef = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    const currentHomePageContainerRef = homePageContainerRef.current;
    const currentMageRef = mageRef.current;
    const currentScrollDownRef = scrollDownRef.current;
    function zoomInPortal(e: Event) {
      const htmlE = e.target as HTMLElement;
      const scrollPos = htmlE.scrollTop;
      if (scrollPos !== 0 && currentScrollDownRef?.style.display !== "none") {
        (currentScrollDownRef as HTMLElement).style.display = "none";
      }
      if (scrollPos === 0 && currentScrollDownRef?.style.display === "none") {
        (currentScrollDownRef as HTMLElement).style.display = "flex";
      }
      if (scrollPos <= 500) {
        (currentMageRef as HTMLElement).style.transform = `scale(${
          1 + htmlE.scrollTop / 700
        }) translate(${150 * (scrollPos / 700)}px, ${
          700 * (scrollPos / 700)
        }px)`;
      }
    }
    if (currentHomePageContainerRef && currentMageRef) {
      currentHomePageContainerRef.addEventListener(
        "scroll",
        zoomInPortal,
        false,
      );
    }
    return () => {
      currentHomePageContainerRef?.removeEventListener(
        "scroll",
        zoomInPortal,
        false,
      );
    };
  }, []);
  function DivVisibleInView({
    text,
    children,
  }: PropsWithChildren<{ text?: String }>) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, type: "tween" }}
        className={classNames({
          "flex justify-center items-center": !text,
          "px-2 md:px-4 py-12 md:py-16 text-xl md:text-4xl text-center": text,
        })}
      >
        {text}
        {children}
      </motion.div>
    );
  }
  return (
    <div
      ref={homePageContainerRef}
      id="home-page-container"
      className="mx-auto w-full h-full container flex flex-col items-center overflow-y-auto overscroll-auto scrollbar-none rounded-2xl"
    >
      <div
        ref={mageRef}
        className="w-full min-h-screen bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/mage.png)`,
          opacity: "65%",
          transform: "scale(1)",
          transition: "tranform 1s",
        }}
      >
        <div className="h-full relative text-6xl md:text-9xl text-white text-base">
          <div
            className="absolute flex-col top-[500px] left-[475px] animate-fade-out-down"
            ref={scrollDownRef}
          >
            <div className="text-base">SCROLL</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="m-auto size-16"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <DivVisibleInView text={"Welcome... to the Monster World!"} />
      <div
        className="w-full min-h-[300px] bg-fixed bg-center be-cover bg-no-repeat bg-gray-100 dark:bg-gray-600"
        style={{
          opacity: "99%",
        }}
      >
        <DivVisibleInView>
          <Image src="/dragon.png" width={300} alt="dragon" ref={hunterRef} />
          <Image
            src="/swords.gif"
            width={100}
            alt="dragon"
            ref={swordRef}
            className="animate-fade-in animate-pop-out"
          />
          <Image src="/hunter.png" width={100} alt="hunter" ref={dragonRef} />
        </DivVisibleInView>
      </div>
      <DivVisibleInView
        text={
          "You, the hunter, have been summoned to this world to defeat its monsters."
        }
      />
      <div
        className="w-full min-h-[300px] bg-fixed bg-center be-cover bg-no-repeat bg-gray-100 dark:bg-gray-600"
        style={{
          opacity: "99%",
        }}
      >
        test 2
      </div>
      <DivVisibleInView
        text={
          "You must fulfill your destiny and defeat the ultimate monster...Godzilla!"
        }
      />
      <div
        className="relative w-full min-h-[500px] text-9xl bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(/universe.png)",
        }}
      >
        <div className="z-[99] absolute text-base top-[100px] left-[450px] animate-bounce justify-items-center">
          <div>CLICK TO ENTER</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            className="m-auto size-16"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex justify-center justify-items-center ">
          <Image
            className="animate-spin-slow"
            src="/monster-world.png"
            height={500}
            width={500}
            alt="image of monster world"
          />
        </div>
      </div>
    </div>
  );
}
