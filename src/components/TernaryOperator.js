import React, { useState, useEffect } from "react";
import User from "./userHooks/User";

const TernaryOperator = () => {
  const [user, setUser] = useState({ name: "", email: "", age: "" });
  const [peoples, setPeoples] = useState([]);
  console.log(peoples);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className=" bg-white w-2/3 flex flex-col mt-24 rounded-lg  items-center relative">
        <div className="flex flex-col w-full justify-center my-12">
          <div className="flex justify-center w-full items-center">
            <h1 className=" text-violet-400 text-xl mr-3">Name: </h1>
            <input
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
              value={user.name}
              placeholder="Name"
              type="text"
              className="m-2 placeholder:text-white/50 bg-violet-400 rounded-full px-4 py-1 w-1/2"
            />
          </div>
          <div className="flex justify-center w-full items-center">
            <h1 className=" text-violet-400 text-xl">Email:</h1>

            <input
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              value={user.email}
              placeholder="Email"
              type="email"
              className="m-2 placeholder:text-white/50 bg-violet-400 rounded-full px-4 py-1 w-1/2"
            />
          </div>
          <div className="flex justify-center w-full items-center ">
            <h1 className=" text-violet-400 text-xl mr-[20px]">Age:</h1>

            <input
              onChange={(e) => {
                setUser({ ...user, age: e.target.value });
              }}
              value={user.age}
              placeholder="Age"
              type="number"
              className="m-2 placeholder:text-white/50 bg-violet-400 rounded-full px-4 py-1 w-1/2"
            />
          </div>
        </div>
        <button
          onClick={() => {
            if (user.name && user.email && user.age) {
              setPeoples([
                ...peoples,
                { name: user.name, email: user.email, age: user.age },
              ]);
              setUser({ name: "", email: "", age: "" });
            }
          }}
          className=" bg-emerald-400 py-2 px-6 rounded-full absolute bottom-[-18px] shadow-md"
        >
          Add user
        </button>
      </div>
      {peoples.map((item, index) => {
        return (
          <User
            key={index}
            name={item.name}
            email={item.email}
            age={item.age}
          />
        );
      })}
    </div>
  );
};

export default TernaryOperator;
