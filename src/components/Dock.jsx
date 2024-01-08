import React from "react";
import { motion, useMotionValue } from "framer-motion";
import AppIcon from "./AppIcon";

const Dock = () => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex h-24 items-end gap-4 rounded-2xl bg-gray-700 px-4 pb-[8px]"
    >
      {[...Array(8).keys()].map((i) => (
        <AppIcon mouseX={mouseX} key={i}/>
      ))}
    </motion.div>
  );
};

export default Dock;
