import React, { useState, useEffect, useReducer } from "react";
import {
  INCREMENT,
  DECREMENT,
  COLOR,
  DELETE,
  LIMIT,
  BANNER,
  BANNER_FALSE,
} from "../useReducer/data/boiler_plate";
import { reducer } from "../useReducer/data/reducer";
import { increment, decrement } from "../useReducer/data/dispatch_functions";
import { motion, AnimatePresence } from "framer-motion";
import LimitCounter from "./LimitCounter";

const Context = () => {
  {
    /* Here we created useReduser hook, there keeps our state variables*/
  }

  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    color: true,
    limitBanner: false,
  });

  useEffect(() => {
    if (state.counter >= 999) {
      dispatch({
        type: LIMIT,
      });
      dispatch({
        type: BANNER,
      });
    }

    if (state.limitBanner && state.counter < 999) {
      dispatch({
        type: BANNER_FALSE,
      });
    }
  }, [state.counter]);

  console.log(state.limitBanner);

  return (
    <div className=" flex flex-col h-screen justify-center items-center ">
      <div className=" absolute top-[120px]">
        <AnimatePresence>
          {state.limitBanner && <LimitCounter />}
        </AnimatePresence>
      </div>
      <div
        className={`${
          state.counter == 999 ? "opacity-50" : "opacity-100"
        }  bg-white rounded-md flex px-12 py-4 transition-all duration-700 justify-between items-center w-1/3`}
      >
        <div className="flex gap-x-2">
          <button
            onClick={() => {
              dispatch(decrement(2));
            }}
            className="btn"
          >
            -2
          </button>
          <button
            onClick={() => {
              dispatch(decrement(1));
            }}
            className="btn"
          >
            -1
          </button>
        </div>
        <div className=" flex flex-col items-center gap-y-5">
          <button
            onClick={() => {
              setTimeout(() => {
                dispatch(increment(100));
              }, 50);
            }}
            className="btn"
          >
            +100
          </button>
          <motion.div
            key={state.counter}
            initial={{ opacity: 0.3, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={` ${
              state.counter >= 0 ? "bg-green-600" : "bg-rose-600 pl-2"
            } p-4 transition-all duration-200 rounded-full h-20 w-20 flex justify-center items-center`}
          >
            <h1
              className={`${
                state.counter < 0 || state.counter >= 100
                  ? "text-4xl"
                  : "text-5xl"
              }`}
            >
              {state.counter}
            </h1>
          </motion.div>
          <button
            onClick={() => {
              dispatch({
                type: DELETE,
              });
            }}
            className="btn bg-rose-600"
          >
            Delete
          </button>
        </div>
        <div className="flex gap-x-2">
          <button
            onClick={() => {
              setTimeout(() => {
                dispatch(increment(1));
              }, 50);
            }}
            className="btn"
          >
            +1
          </button>
          <button
            onClick={() => {
              setTimeout(() => {
                dispatch(increment(2));
              }, 50);
            }}
            className="btn"
          >
            +2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Context;
