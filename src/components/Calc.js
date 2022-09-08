import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Calc = () => {
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);
  const [math, setMath] = useState("+");

  const calculator = (a, operator, b) => {
    if (operator == "+") {
      return a + b;
    }
    if (operator == "-") {
      return a - b;
    }
    if (operator == "/") {
      let c = a / b;
      return c.toFixed(3);
    }
    if (operator == "*") {
      return a * b;
    }
  };

  useEffect(() => {
    const intervalId = setInterval(()=>{
        console.log('2 sec')
    },2000)

    return () => {
        clearInterval(intervalId)
    }
  },[math]);

  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <div className="flex gap-x-5">
        <button
          onClick={() => setMath("+")}
          className="bg-sky-500 py-1 px-8 rounded-md active:opacity-20"
        >
          +
        </button>
        <button
          onClick={() => setMath("-")}
          className="bg-sky-500 py-1 px-8 rounded-md active:opacity-20"
        >
          -
        </button>
        <button
          onClick={() => setMath("/")}
          className="bg-sky-500 py-1 px-8 rounded-md active:opacity-20"
        >
          /
        </button>
        <button
          onClick={() => setMath("*")}
          className="bg-sky-500 py-1 px-8 rounded-md active:opacity-20"
        >
          *
        </button>
      </div>
      <div className="flex items-center gap-x-5">
        <input
          onChange={(e) => setFirstInput(e.target.value)}
          value={firstInput}
          placeholder="0"
          type="number"
          className="w-[150px] text-slate-600 p-2 rounded-md"
        />
        <h1>{math}</h1>
        <input
          onChange={(e) => setSecondInput(e.target.value)}
          value={secondInput}
          placeholder="0"
          type="number"
          className="w-[150px] text-slate-600 p-2 rounded-md"
        />
      </div>
      <h1 className="text-2xl border-2 p-2 rounded-lg">
        {firstInput + secondInput
          ? calculator(Number(firstInput), math, Number(secondInput))
          : 0}
      </h1>
    </div>
  );
};

export default Calc;
