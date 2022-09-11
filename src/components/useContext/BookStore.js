import React, { useState, useEffect } from "react";

import AllBooks from "./AllBooks";
import Context from "./Context";

const BookStore = () => {
  const [amountBooks, setAmountBooks] = useState(0);

  const buyBook = (n) => {
    return setAmountBooks((prev) => {
      return prev + n;
    });
  };

  const valueBook = {
    amountBooks,
    buyBook,
  };

  return (
    <Context.Provider value={valueBook}>
      <div className="flex justify-center items-center h-[30vw]">
        <div className=" bg-white rounded-md w-2/3 p-4 gap-y-12 flex flex-col items-center justify-between ">
          <h1 className=" text-4xl bg-emerald-400 w-full text-center py-2 rounded-md">
            Book Store
          </h1>
          <div className="flex flex-row ">
            <h1 className="text-slate-400 text-2xl">
              You already buy {amountBooks}{" "}
              {amountBooks == 1 ? "book" : "books"}
              📖
            </h1>
            {amountBooks > 0 && <button
            onClick={() => {
                setAmountBooks(() => {
                    return 0
                })
            }}
            className="btn bg-rose-500 ml-4">Clear</button>}
          </div>
          <AllBooks />
        </div>
      </div>
    </Context.Provider>
  );
};

export default BookStore;
