import React from "react";
import { useCounter } from "../../hooks";

export const Counter = () => {
  const { counter, decrement, increment } = useCounter();
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => decrement()}>Reducir</button>
      <button onClick={() => increment()}>Incrementar</button>
    </div>
  );
};
