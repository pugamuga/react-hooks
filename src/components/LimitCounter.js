import React from "react";

const LimitCounter = () => {
  return (
    <div className=" scale-75">
      <div className=" flex items-center justify-between bg-rose-400 rounded-md px-4 ">
        <h1 className="text-[60px] mr-4 mb-2">💵</h1>
        <div className="flex flex-col items-center pr-4">
          <h1>Limit for trial version of counter: 1000</h1>
          <h1 className="text-sm text-white/70">
            {" "}
            For unlocking <span className="text-green-200">Infinite</span>{" "}
            counter buy subscription
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LimitCounter;
