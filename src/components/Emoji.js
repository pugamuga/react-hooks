import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Emoji = () => {
  const [input, setInput] = useState(500);
  const [index, setIndex] = useState(0);
  const moons = ["🌑", "🌒", "🌓", "🌔", "🌕", "💥", "sosi","zhopy"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((value) => {
        const newValue = value + 1;
        return newValue >= moons.length ? 0 : newValue;
      });
    }, input);

    return () => {
      clearInterval(intervalId);
    };
  }, [input, index]);
  // {moons[index]}

  return (
    <div className=" bg-gray-100/20 h-full w-full flex justify-center items-start">
      <div className="flex flex-col gap-y-5 items-center mt-4">
        <div className="text-5xl">{moons[index]}</div>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          type="number"
          placeholder="0"
          className="h-[40px] rounded-full text-slate-900 px-3"
        />{" "}
      </div>
    </div>
  );
};

export default Emoji;
