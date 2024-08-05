"use client";
import react, { useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useSpring,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { Image } from "@nextui-org/react";
import { useParallax } from "@/lib/hooks/useParallax";
import {
  THomeSlice,
  TTechStackIcons,
} from "@/lib/types-interfaces-enums/types";
import { TECH_STACK_ICONS } from "@/lib/constants/constants";
import ParallaxIcon from "@/lib/ui/home/ParallaxIcon";
import ParallaxImage from "@/lib/ui/home/ParallaxImage";

const HOME_SLICES: Array<THomeSlice> = [
  {
    element: (
      <section>
        <ParallaxIcon baseVelocity={10} icons={TECH_STACK_ICONS} />
      </section>
    ),
    text: "The stack",
    key: "stack",
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
    text: "Welcome to the Monster World!",
    key: "welcome-mage",
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
    text: "You have been summoned to defeat a fierce monster threatening this world...",
    key: "dragon-vs-human",
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
    text: "Click the World to Enter!",
    key: "enter-the-world",
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
      className="h-screen overflow-hidden overflow-y-auto overscroll-auto scrollbar-none snap-y snap-mandatory"
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
