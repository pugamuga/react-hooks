import React from "react";
import { useState } from "react";

const UserMade = ({ text }) => <div className="mt-2 ">{text}</div>;
const headerText = "Here ReactUdemy div";

const ChildrenText = ({ children }) => {
  return <div className="p-1">{children}</div>;
};

const ReactUdemy = () => {
  const [margin, setMargin] = useState(false);
  console.log(margin);
  const arEmpty = [];
  for (let i = 0; i < 10; i++) {
    arEmpty.push(i);
  }
  return (
    <>
      <div
        className=" cursor-pointer border-2 px-2 rounded-md w-1/4 active:opacity-50"
        onClick={() => setMargin((prev) => !prev)}
      >
        {" "}
        <div className="flex flex-col">
          <h1>{headerText.toLowerCase()}</h1>
          <h1>{headerText.toUpperCase()}</h1>
          <h1>{headerText.toString()}</h1>
        </div>
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
            <UserMade text={`It's ${i + 1} component, index is ${i}`} />
            <div>
              <ChildrenText>
                {i === 9 || i == 4 || i == 0 ? <input type="text" /> : null}
              </ChildrenText>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ReactUdemy;
