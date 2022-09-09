import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const booksData = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51mDSB+k7YL._SX327_BO1,204,203,200_.jpg",
    title: "Fairy Tale ",
    author: "Stephen King",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41n9-p6-PpL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Reminders of Him",
    author: "Colleen Hoover",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41KY-NORo9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The 48 Laws of Power  ",
    author: "Robert Greene ",
  },
];

console.log(booksData);

const del = () => {
  booksData.pop();
};

const deleteItem = (i) => {
  if (i > -1) {
    booksData.splice(i, 1);
  }
};

const Book = ({ img, title, author, i, setArr, arr }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: .1, duration: 1, type: "spring" }}
      className="bg-white transition-all duration-500  relative flex rounded-lg flex-col w-[300px] h-[470px] lg:w-[200px] lg:h-[340px]"
    >
      <img
        src={img}
        className=" object-cover lg:h-[250px] h-[400px] rounded-lg m-2"
      />
      <h1 className=" text-slate-700 px-2">{title}</h1>
      <h1 className=" text-slate-700 px-2">{author}</h1>
      <button
        onClick={() => {
          const newAr = [...arr];
          newAr.splice(i, 1);
          return setArr(newAr);
        }}
        className=" absolute lg:bottom-[-20px] bottom-[-4%] left-[43%] px-4 lg:left-[5%] bg-rose-700 active:bg-rose-500 rounded-full mx-12 my-2"
      >
        Delete
      </button>
    </motion.div>
  );
};

const Books = () => {
  const [arr, setArr] = useState(booksData);
  return (
    <div className=" container lg:w-[800px] mx-auto ">
      <div className="grid transition-all duration-500  lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-y-10  justify-items-center  ">
        <AnimatePresence>
          {arr.map((item, i) => {
            return (
              <Book i={i} key={item.id} {...item} arr={arr} setArr={setArr} />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Books;
