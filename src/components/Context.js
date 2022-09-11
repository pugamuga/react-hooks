import React, { useState, useEffect, useReducer } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LimitCounter from "./LimitCounter";

// create const, just for avoid mistakes

const INCREMENT = "increment";
const DECREMENT = "decrement";
const COLOR = "change_color";
const DELETE = "delete";
const LIMIT = "limit";
const BANNER = "banner";
const BANNER_FALSE = "banner-false";

// create functions for easeier way to put value on dispatch

const increment = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};
const decrement = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};

// create reduser, where we put our cases. Case - just name of state.type,
// need to return old state, theafore we write at first {...state, ___ }

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + action.payload };
    case DECREMENT:
      return { ...state, counter: state.counter - action.payload };
    case DELETE:
      return { ...state, counter: 0 };
    case LIMIT:
      return { ...state, counter: 1000 };
    case COLOR:
      return { ...state, color: !state.color };
    case BANNER:
      return { ...state, limitBanner: true };
    case BANNER_FALSE:
      return { ...state, limitBanner: false };
    default:
      return { ...state };
  }
};

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
    if (state.counter >= 1000) {
      dispatch({
        type: LIMIT,
      });
      dispatch({
        type: BANNER,
      });
    }

    if (state.limitBanner && state.counter < 1000) {
      dispatch({
        type: BANNER_FALSE,
      });
    }
  }, [state.counter]);

  console.log(state.limitBanner);

  return (
    <div className=" flex flex-col h-screen justify-center items-center">
      <LimitCounter />
      <div className=" bg-white rounded-md flex px-12 py-4 justify-between items-center w-1/3">
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
              dispatch(increment(100));
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
              dispatch(increment(1));
            }}
            className="btn"
          >
            +1
          </button>
          <button
            onClick={() => {
              dispatch(increment(2));
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
