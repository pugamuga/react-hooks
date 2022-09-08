import React from "react";
import { useState } from "react";

const UserMade = ({ text }) => <div className="mt-2 ">{text}</div>;

const ReactUdemy = () => {
  const [margin, setMargin] = useState(false);
  console.log(margin)
  const arEmpty = [];
  for (let i = 0; i < 10; i++) {
    arEmpty.push(i);
  }
  return (
    <>
      <div
        className=" cursor-pointer border-2 px-2 rounded-full w-[200px] active:opacity-50"
        onClick={() => setMargin((prev) => !prev)}
      >
        Here ReactUdemy div
      </div>
      {arEmpty.map((item, i) => {
        return (
          <div
          className=" transition-all duration-500 "
            key={i}
            style={{
              backgroundColor: `rgb(255,${10 + 20 * i},${10 + 20 * i})`,
              opacity: `${10 * i + 10}%`,
              width: `${200 + 50 * i}px`,
              marginLeft: `${margin ? 20 * i : 0}px`,
            }}
          >
            <UserMade text={`It's ${i + 1} component`} />
          </div>
        );
      })}
    </>
  );
};

export default ReactUdemy;
