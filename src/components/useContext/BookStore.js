import React from "react";
import AllBooks from "./AllBooks";

const BookStore = () => {
  return (
    <div className="flex justify-center items-center h-[30vw]">
      <div className=" bg-white rounded-md w-2/3 p-4 gap-y-12 flex flex-col items-center justify-between ">
        <h1 className="text-slate-600 text-4xl">Book Store</h1>
        <h1 className="text-slate-400 text-2xl">
          You already buy {NaN} books📖
        </h1>
        <AllBooks />
      </div>
    </div>
  );
};

export default BookStore;
