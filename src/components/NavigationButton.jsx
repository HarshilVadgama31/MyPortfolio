import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion} from "framer-motion";

const NavigationButton = ({ children, icon, redirect }) => {
  const [onhovervalue, setonhovervalue] = useState(false);
  const navigate = useNavigate();

  const spring = {
    type: "spring",
    stiffness: 200,
    damping: 20,
  };

  return (
    <>
      {/* <motion.button
        className={`h-16 hover:h-48 my-2 mx-2 flex flex-col relative w-[3.95rem] rounded-full bg-white`}
        whileHover={{ height: 48 }}
        transition={spring}
        onMouseEnter={() => setonhovervalue(true)}
        onMouseLeave={() => setonhovervalue(false)}
        onClick={() => {
          navigate(redirect);
        }}
      >
        <motion.img
          className={`absolute h-[4.1rem] w-[4.1rem] rounded-full p-[14px]`}
          src={icon}
          alt="Symbol"
          initial={false}
          animate={{
            backgroundColor: onhovervalue ? "bg-accent_color" : "bg-white",
          }}
        />
        {onhovervalue && (
          <motion.div
            className="mx-auto mb-4 mt-16 w-4 text-lg font-semibold break-words text-bg_color"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </motion.button> */}
      <button
        className={`transition-all duration-300 ease-in h-16 hover:h-48 my-2 mx-2 flex flex-col relative w-[3.95rem] rounded-full bg-white`}
        onMouseEnter={() => setonhovervalue(!onhovervalue)}
        onMouseLeave={() => setonhovervalue(!onhovervalue)}
        onClick={() => {
          navigate(redirect);
        }}
      >
        <img
          className={`absolute h-[4.1rem] w-[4.1rem] rounded-full p-[14px] ${
            onhovervalue ? "bg-accent_color" : "bg-white"
          }`}
          src={icon}
          alt="Symbol"
          
        />
        {onhovervalue && (
          <div className="mx-auto mb-4 mt-16 w-4 text-lg font-semibold break-words text-bg_color">
            {children}
          </div>
        )}
      </button>
    </>
  );
};

export default NavigationButton;
