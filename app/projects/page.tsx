"use client";
import React from "react";
import ProjectSelection from "../lib/ui/project-selection/project-selection";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Todos() {
  return (
    <motion.div
      key={"project-selection"}
      className="h-full flex justify-center items-center"
    >
      <ProjectSelection />
    </motion.div>
  );
}
