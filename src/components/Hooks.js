import React from "react";
import Calc from "./Calc";
import Emoji from "./Emoji";
import { useCounter } from "./userHooks/pugamugaHooks";

export const Hooks = () => {
  const emptyArray = [];
  for (let i = 0; i < 2; i++) {
    emptyArray.push(i);
  }

  const { value: clicks, increase, decrease } = useCounter(0, 1);

  return (
    <div className="mt-[100px] flex flex-col gap-y-[100px] justify-center items-center">
      <Time />
      <div className="flex flex-col gap-y-5">
        {emptyArray.map((item, i) => {
          return (
            <h1 key={i}>
              Number: {clicks}
              <button
                onClick={i === 0 ? () => increase() : () => decrease()}
                className="bg-slate-600 rounded-md py-2 px-6 ml-12 active:bg-slate-300"
              >
                {i === 0 ? "plus" : "minus"}
              </button>
            </h1>
          );
        })}
      </div>
      <Calc />
      <div className="h-[300px] w-full">
        <Emoji />
      </div>
    </div>
  );
};

const Time = () => {
  const {
    value: year,
    increase: yearInc,
    decrease: yearDecr,
  } = useCounter(2020, 10);

  return (
    <div className=" flex gap-x-2 items-center">
      <button
        onClick={() => {
          yearDecr();
        }}
        className="bg-sky-500 px-4 py-1 rounded-md"
      >
        Past
      </button>
      <h1 className="text-2xl">Now is {year}'s decade</h1>
      <button
        onClick={() => {
          yearInc();
        }}
        className="bg-sky-500 px-4 py-1 rounded-md"
      >
        {" "}
        Future
      </button>
    </div>
  );
};
