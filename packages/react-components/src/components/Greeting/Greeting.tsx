import React from "react";
import { useLocalStorage } from "../../hooks";

export const Greeting = ({ defaultValue = "" }) => {
  const [value, setValue] = useLocalStorage({ key: "Greeting", defaultValue });

  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      {value ? <strong>Hello {value}</strong> : "Digite su nombre"}
    </div>
  );
};
