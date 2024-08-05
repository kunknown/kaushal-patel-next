import { TTechStackIcons } from "@/lib/types-interfaces-enums/types";
import {
  useAnimationFrame,
  useMotionValue,
  useTransform,
  motion,
} from "framer-motion";
import react, { useRef } from "react";

export default function ParallaxIcon({
  icons,
  baseVelocity = 100,
}: {
  icons: Array<TTechStackIcons>;
  baseVelocity: number;
}) {
  const baseX = useMotionValue(-35);
  const directionFactor = useRef<number>(1);
  const minPosition = -75;
  const maxPosition = -7;
  const x = useTransform(baseX, (v) => `${v}%`);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    let newPosition = baseX.get() + moveBy;
    if (newPosition > maxPosition) {
      console.log("newPosition:", newPosition);
      directionFactor.current = -1;
      newPosition = maxPosition;
    } else if (newPosition - 0.01 < minPosition) {
      console.log("newPosition:", newPosition);
      directionFactor.current = 1;
      newPosition = minPosition;
    }
    baseX.set(newPosition);
  });
  return (
    <div className="my-4 overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex align-center" style={{ x }}>
        {icons.map(({ src, alt }) => (
          <span key={alt} className="flex justify-center mr-4">
            <motion.img src={src} alt={alt} className="min-w-64 h-64" />
          </span>
        ))}
        {icons.map(({ src, alt }) => (
          <span key={alt} className="flex justify-center mr-4">
            <motion.img src={src} alt={alt} className="min-w-64 h-64" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
