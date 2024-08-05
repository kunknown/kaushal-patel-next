"use client";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { PropsWithChildren, useEffect, useState } from "react";

export default function MyComponent() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((i) => {
        console.log("setting visible to ", !i);
        return !i;
      });
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-black h-screen"
        />
      )}
    </AnimatePresence>
  );
}

// export default function FramerMotion() {
//   const { scrollYProgress } = useScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
//   return (
//     <div
//       style={{
//         height: "150px",
//         left: "50%",
//         position: "fixed",
//         top: "50%",
//         width: "150px",
//       }}
//     >
//       <motion.div
//         style={{
//           background: "rgba(255, 255, 255, 0.2)",
//           overflow: "hidden",
//           scale,
//         }}
//         className="h-full w-full bg-gray border-rounded"
//       >
//         <motion.div
//           style={{
//             background: "white",
//             height: "inherit",
//             scaleY: scrollYProgress,
//             transformOrigin: "50% 100%",
//             width: "inherit",
//           }}
//         />
//       </motion.div>
//     </div>
//   );
// }
