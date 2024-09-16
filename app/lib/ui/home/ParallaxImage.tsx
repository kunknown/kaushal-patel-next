import react from "react";
import { useParallax } from "@/lib/hooks/useParallax";
import { motion, MotionValue } from "framer-motion";
import { THomeSlice } from "@/lib/types-interfaces-enums/types";

export default function ParallaxImage({
  element,
  text,
  scrollYProgress,
}: THomeSlice & { scrollYProgress: MotionValue<number> }) {
  const y = useParallax(scrollYProgress, 200);
  return (
    <section
      className="h-screen flex flex-col md:flex-row justify-center items-center relative snap-center"
      style={{ perspective: "500px" }}
    >
      <motion.h2
        initial={{ opacity: 0, translateY: "100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, type: "just" }}
        viewport={{ once: true }}
        className="block md:hidden pb-4 text-black dark:text-white text-2xl uppercase text-center font-bold"
      >
        {text}
      </motion.h2>
      <motion.div
        className="w-screen overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {element}
      </motion.div>
      <motion.h2
        style={{ y }}
        initial={{ opacity: 0, translateX: "-100%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5, type: "just" }}
        viewport={{ once: true }}
        className="hidden md:block min-w-[250px] max-w-[250px] text-black dark:text-white text-2xl uppercase text-center font-bold"
      >
        {text}
      </motion.h2>
    </section>
  );
}
