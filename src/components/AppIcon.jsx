import React from "react";
import { useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const AppIcon = ({ mouseX }) => {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-300, 0, 300], [80, 150, 80]);

  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className=" aspect-square w-16 rounded-2xl bg-gray-400"
    />
  );
};

export default AppIcon;
