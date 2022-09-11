import {
    INCREMENT,
    DECREMENT,
    COLOR,
    DELETE,
    LIMIT,
    BANNER,
    BANNER_FALSE,
  } from "./boiler_plate";

export const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return { ...state, counter: state.counter + action.payload };
      case DECREMENT:
        return { ...state, counter: state.counter - action.payload };
      case DELETE:
        return { ...state, counter: 0 };
      case LIMIT:
        return { ...state, counter: 999 };
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