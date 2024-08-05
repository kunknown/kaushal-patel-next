import react from "react";
import { useParallax } from "@/lib/hooks/useParallax";
import { motion, MotionValue } from "framer-motion";
import { THomeSlice } from "@/lib/types-interfaces-enums/types";

export default function ParallaxImage({
  element,
  text,
  scrollYProgress,
}: THomeSlice & { scrollYProgress: MotionValue<number> }) {
  const y = useParallax(scrollYProgress, 300);
  return (
    <section
      className="h-full flex justify-center items-center relative snap-center"
      style={{ perspective: "500px" }}
    >
      <div className="max-w-[70vw] max-h-[90vh] m-[20px] overflow-hidden">
        {element}
      </div>
      <motion.h2
        style={{ y }}
        initial={{ opacity: 0, translateX: "-100%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5, type: "just" }}
        className="text-black dark:text-white text-2xl uppercase"
      >
        {text}
      </motion.h2>
    </section>
  );
}
