import React, { useState, useEffect } from "react";
import { useRef } from "react";

const UseRef = () => {
  const [counter, setCounter] = useState(0);

  const click = useRef();

  useEffect(() => {
    click.current = 0; // after first render click.current = 0
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          return (click.current = click.current + 1);// change ref state, without rerenders
        }}
        className="btn"
      >
        Click {counter} times
      </button>
      <button
        onClick={() => {
          return setCounter(click.current);// put current ref state as new value in setState, what triggered rerender
        }}
        className="btn ml-5"
      >
        Check useRef
      </button>
    </div>
  );
};

export default UseRef;
