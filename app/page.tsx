"use client";
import { useRef } from "react";
import { useScroll, motion, useSpring } from "framer-motion";
import { Image } from "@nextui-org/react";
import { THomeSlice } from "@/lib/types-interfaces-enums/types";
import { TECH_STACK_ICONS } from "@/lib/constants/constants";
import ParallaxIcon from "@/lib/ui/home/ParallaxIcon";
import ParallaxImage from "@/lib/ui/home/ParallaxImage";
import { StackChips } from "@/lib/ui/home/StackChips";

const HOME_SLICES: Array<THomeSlice> = [
  {
    element: (
      <section>
        <StackChips icons={TECH_STACK_ICONS} />
        <ParallaxIcon
          baseVelocity={5}
          icons={[
            ...TECH_STACK_ICONS,
            ...TECH_STACK_ICONS,
            ...TECH_STACK_ICONS,
          ]}
        />
      </section>
    ),
    text: "The Tech stack",
    key: "tech-stack",
  },
  {
    element: (
      <Image
        src="/mage.png"
        alt="A mage standing in front of a portal"
        className=""
        height={"100%"}
        width={"100%"}
      />
    ),
    text: "The Experience",
    key: "experience",
  },
  {
    element: (
      <div className="flex">
        <motion.div
          initial={{ opacity: 0, scale: 0.1, translate: "-50% 50%" }}
          whileInView={{ opacity: 1, scale: 1, translate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/dragon.png" alt="dragon" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image src="/swords.gif" alt="dragon" width={200} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.1, translate: "50% -50%" }}
          whileInView={{ opacity: 1, scale: 1, translate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/hunter.png" alt="hunter" width={200} />
        </motion.div>
      </div>
    ),
    text: "The Passion",
    key: "passion",
  },
  {
    element: (
      <a href="/projects/monster-battle">
        <Image
          src="/monster-world.png"
          alt="A monster world"
          className="hover:animate-spin-slow"
          height={"100%"}
          width={"100%"}
        />
      </a>
    ),
    text: "Explore The Projects",
    key: "projects",
  },
];
export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    restDelta: 0.001,
    stiffness: 100,
  });

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden overflow-y-auto overscroll-auto scrollbar-none snap-y snap-mandatory "
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
