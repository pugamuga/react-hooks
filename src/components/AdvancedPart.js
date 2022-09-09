import React from "react";
import { useState } from "react";

const peoples = ["puga", "muga", "evgeny", "easy"];

const AdvancedPart = () => {
  const [names, setNames] = useState(peoples);

  const removeName = (i) => {
    let newNames = names.filter((_, index) => {
      return index !== i;
    });

    setNames(newNames);
  };

  return (
    <div className=" flex flex-col items-center  ">
      {names.map((name, i) => {
        return (
          <div key={i} className="relative">
            <div className=" bg-slate-700 text-center w-[150px] p-2 mt-2 rounded-xl">
              {name}
            </div>
            <button
              onClick={() => {
                removeName(i);
              }}
              className="right-[-40px] bottom-2 ring-2 ring-rose-400 
        ring-offset-4 ring-offset-slate-600
         bg-rose-500 rounded-full px-2 absolute"
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AdvancedPart;
