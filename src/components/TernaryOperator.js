import React, { useState, useEffect } from "react";

const TernaryOperator = () => {
  const [input, setInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div className=" flex flex-col w-[200px] gap-y-5">
      <input
      onChange={(e)=>{
            setEmailInput(e.target.value)
      }}
      value={emailInput}
        placeholder="email"
        type="email"
        className="text-slate-900 placeholder-slate-400"
      />
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="input"
        className="text-slate-900 placeholder-slate-400"
      />
      <button
      onClick={()=>{
        setOutput(`User email: ${emailInput}, and user name: ${input}`)
      }}
      className=" bg-green-400 rounded-md py-1">Click</button>
      <h1>{output}</h1>
    </div>
  );
};

export default TernaryOperator;
