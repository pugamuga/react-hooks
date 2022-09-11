import React from "react";

const User = ({ name, email, age }) => {
  return (
    <div className="mt-12 bg-pink-500 w-2/3 flex shadow-md justify-between items-center px-12 py-4 rounded-full">
      <div className="text-xl">{name}</div>
      <div className="text-sm">{email}</div>
      <div className="text-sm">{age}</div>
    </div>
  );
};

export default User;
