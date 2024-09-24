"use client";

import { DarkThemeContext } from "@/lib/context/dark-theme-context";
import { TTechStackIcons } from "@/lib/types-interfaces-enums/types";
import classNames from "classnames";
import {
  useAnimationFrame,
  useMotionValue,
  useTransform,
  motion,
} from "framer-motion";
import { useContext, useRef } from "react";

export default function ParallaxIcon({
  icons,
  baseVelocity = 10,
}: Readonly<{
  icons: Array<TTechStackIcons>;
  baseVelocity: number;
}>) {
  const { isDarkTheme } = useContext(DarkThemeContext);
  const baseX = useMotionValue(-35);
  const directionFactor = useRef<number>(1);
  const minPosition = -90;
  const maxPosition = 10;
  const x = useTransform(baseX, (v) => `${v}%`);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    let newPosition = baseX.get() + moveBy;
    if (newPosition > maxPosition) {
      directionFactor.current = -1;
      newPosition = maxPosition;
    } else if (newPosition - 0.01 < minPosition) {
      directionFactor.current = 1;
      newPosition = minPosition;
    }
    baseX.set(newPosition);
  });
  return (
    <div className="my-4 overflow-x-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex align-center" style={{ x }}>
        {icons.map(({ src, alt, srcDark }) => (
          <span key={`${src}`} className="flex justify-center mr-4">
            <motion.img
              src={isDarkTheme && srcDark ? srcDark : src}
              alt={alt}
              className="min-w-32 md:min-w-64 h-32 md:h-64"
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
