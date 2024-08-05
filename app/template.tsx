"use client";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";

export default function Template({ children }: Readonly<PropsWithChildren>) {
  useEffect(() => {
    console.log("home template mounted");
    return () => {
      console.log("home template un-mounted");
    };
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={"root-layout"}
        initial={{ height: "100vh", opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto m-4"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
