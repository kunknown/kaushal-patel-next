"use client";
import { useRef } from "react";
import { useScroll, motion, useSpring } from "framer-motion";
import { THomeSlice } from "@/lib/types-interfaces-enums/types";
import { TECH_STACK_ICONS } from "@/lib/constants/constants";
import ParallaxIcon from "@/lib/ui/home/ParallaxIcon";
import ParallaxImage from "@/lib/ui/home/ParallaxImage";
import { StackChips } from "@/lib/ui/home/StackChips";

const HOME_SLICES: Array<THomeSlice> = [
  {
    element: (
      <>
        <StackChips icons={TECH_STACK_ICONS} />
        <ParallaxIcon
          baseVelocity={5}
          icons={[
            ...TECH_STACK_ICONS,
            ...TECH_STACK_ICONS,
            ...TECH_STACK_ICONS,
          ]}
        />
      </>
    ),
    text: "The Portfolio Tech stack",
    key: "portfolio-tech-stack",
  },
  {
    element: (
      <h2 className="p-2 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg text-2xl uppercase text-center">
      An entrepreneurial-minded, senior full-stack software engineer with a strong drive for efficient problem-solving, a passion for clean and
      efficient code, and a desire for continuous learning and innovation.
      </h2>
    ),
    text: "The Person",
    key: "person",
  },
  {
    element: (
      <>
        <div className="pb-4 text-black dark:text-white text-center text-xl font-bold">HOVER & CLICK!</div>
        <a href="/projects" className="flex place-content-center">
          <motion.div
            className="h-[300px] w-[300px] bg-gray-800 rounded-2xl"
            whileHover={{
              scale: [1, 0.25, 0.75, 0.25, 1],
              rotate: [0, 0, 360, 360, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              backgroundColor: "green",
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </a>
      </>
    ),
    text: "The Projects",
    key: "projects",
  },
];
export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    damping: 15,
    restDelta: 0.001,
    stiffness: 75,
  });

  return (
    <div
      ref={containerRef}
      className="h-screen m-4 max-w-[1000px] overflow-hidden overflow-y-auto overscroll-auto scrollbar-none snap-y snap-mandatory "
    >
      {HOME_SLICES.map(({ element, text, key }) => (
        <ParallaxImage
          key={key}
          element={element}
          text={text}
          scrollYProgress={scrollYProgress}
        />
      ))}
      <motion.div
        className="fixed left-0 right-0 h-[5px] bg-white top-16"
        style={{ scaleX }}
      />
    </div>
  );
}
