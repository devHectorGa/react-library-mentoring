import { useState } from "react";

export const useCounter = ({
  initialValue = 0,
  mainStep = 1,
}: {
  initialValue?: number;
  mainStep?: number;
} = {}) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (step?: number) => setCounter(counter + (step || mainStep));

  const decrement = (step?: number) => setCounter(counter - (step || mainStep));

  return {
    counter,
    increment,
    decrement,
  };
};
