import React, { useState } from "react";
import { useRef } from "react";

const RefAsObject = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");

  const nameRef = useRef();
  const surNameRef = useRef();

  const handlerName = (e) => {
    if (e.key === "Enter") {
      return surNameRef.current.focus();
    }
  };
  const handlerSurName = (e) => {
    if (e.key === "Enter") {
      return nameRef.current.focus();
    }
  };

  return (
    <div className=" flex flex-col gap-y-5 w-[200px]">
      <input
        ref={nameRef}
        value={name}
        onKeyUp={handlerName}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        className=" text-violet-800"
      />
      <input
        onKeyUp={handlerSurName}
        ref={surNameRef}
        value={surName}
        onChange={(e) => {
          setSurName(e.target.value);
        }}
        type="text"
        className=" text-violet-800"
      />
    </div>
  );
};

export default RefAsObject;
