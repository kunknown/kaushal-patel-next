"use client";
import { useRef } from "react";
import { useScroll, motion, useSpring } from "framer-motion";
import { THomeSlice } from "@/lib/types-interfaces-enums/types";
import { ABOUT_TECH_STACK_ICONS } from "@/lib/constants/constants";
import ParallaxIcon from "@/lib/ui/home/ParallaxIcon";
import ParallaxImage from "@/lib/ui/home/ParallaxImage";
import { StackChips } from "@/lib/ui/home/StackChips";

const HOME_SLICES: Array<THomeSlice> = [
  {
    element: (
      <>
        <StackChips icons={ABOUT_TECH_STACK_ICONS} />
        <ParallaxIcon
          baseVelocity={5}
          icons={[
            ...ABOUT_TECH_STACK_ICONS,
            ...ABOUT_TECH_STACK_ICONS,
            ...ABOUT_TECH_STACK_ICONS,
          ]}
        />
      </>
    ),
    text: "The tech proficiency",
    key: "tech-proficiency",
  },
  {
    element: (
      <h2 className="p-2 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg text-2xl uppercase text-center">
        Solving every problem with a focus on efficient engineering
      </h2>
    ),
    text: "The Passion",
    key: "passion",
  },
  {
    element: (
      <ul className="p-2 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg list-disc">
        <li><h2 className="text-small md:text-lg font-bold">Leadership & Cross-Functional Collaboration</h2><p className="text-xs md:text-base">Spearheaded the successful launch of critical project by coordinating with multiple cross-functional teams, both remote and local.</p></li>
        <br />
        <li><h2 className="text-small md:text-lg font-bold">Full-Stack Development & Real-Time Systems</h2><p className="text-xs md:text-base">Delivered complex, time-sensitive project using React and Node.js, showcasing strong full-stack development skills.</p></li>
        <br />
        <li><h2 className="text-small md:text-lg font-bold">Mentorship & Team Growth</h2><p className="text-xs md:text-base">Enhanced team productivity by mentoring junior developers and driving architectural decisions.</p></li>
        <br />
        <li><h2 className="text-small md:text-lg font-bold">Process Optimization & Code Quality</h2><p className="text-xs md:text-base">Revamped testing frameworks, optimized building performance, and improved code review processes.</p></li>
        <br />
        <li><h2 className="text-small md:text-lg font-bold">UI/UX Enhanceent & Feature Development</h2><p className="text-xs md:text-base">Improved UI/UX by designing reusable UI components in React and reducing development time.</p></li>
      </ul>
    ),
    text: "The Experience",
    key: "experience",
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
