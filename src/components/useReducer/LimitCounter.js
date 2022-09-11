import React from "react";
import { motion } from "framer-motion";

const LimitCounter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200, scale: 0.7 }}
      animate={{ opacity: 1, y: 0, scale: 0.7 }}
      exit={{ opacity: 0, y: 200, scale: 0.7 }}
      transition={{delay:.3}}
      className=" "
    >
      <div className=" flex items-center justify-between bg-rose-400 rounded-md px-4 ">
        <h1 className="text-[60px] mr-4 mb-2">💵</h1>
        <div className="flex flex-col items-center pr-4">
          <h1>Limit for trial version of counter: 999</h1>
          <h1 className="text-sm text-white/70">
            {" "}
            For unlocking <span className="text-green-200">Infinite</span>{" "}
            counter buy subscription
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default LimitCounter;
