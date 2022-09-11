export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const COLOR = "change_color";
export const DELETE = "delete";
export const LIMIT = "limit";
export const BANNER = "banner";
export const BANNER_FALSE = "banner-false";

export const increment = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};
export const decrement = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};
