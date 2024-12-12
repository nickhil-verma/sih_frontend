// LoadingPage.js
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import EMB from "../img/EMB.jpg";

const LoadingPage = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Notify parent component to remove loading screen
    }, 7000); // Fixed 7-second delay

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onFinish]);

  const text = "Ministry of Social Justice and Empowerment";
  const letters = text.split("");

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 7 }} // Ensure this delay matches the text animation
      className="fixed top-0 left-0 w-full h-full bg-black z-50"
    >
      <div className="flex justify-center items-center h-full flex-col">
        <img className="h-28 mb-6" src={EMB} alt="EMB logo" />
        <motion.div className="flex flex-row">
          <motion.p
            className="text-xl font-bold text-white"
            style={{ display: "inline-block", whiteSpace: "pre-wrap" }} // Preserve spacing
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }} // Staggered effect per letter
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingPage;
