import { useState } from "react";

export function useCounter(initial = 0, delta = 1) {
  const [value, setValue] = useState(initial);

  const increase = () => {
    setValue((prev) => prev + delta);
  };
  const decrease = () => {
    setValue((prev) => prev - delta);
  };

  return {
    value,
    increase,
    decrease,
  };
}
