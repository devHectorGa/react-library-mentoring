import { useState, useEffect, Dispatch, SetStateAction } from "react";

type useLocalStorageParams = {
  key: string;
  defaultValue: string;
};

type useLocalStorageReturn = [
  state: string,
  setState: Dispatch<SetStateAction<string>>
];

export const useLocalStorage = ({
  key,
  defaultValue = "",
}: useLocalStorageParams): useLocalStorageReturn => {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) ?? defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
