import { useState } from "react";

export function useLocalStorage(key, value) {
  const [val, setVal] = useState(() => {
    const initialVal = localStorage.getItem(key);
    return initialVal ? JSON.parse(initialVal) : value;
  });
  const setValueA = (value) => {
    setVal(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [val, setValueA];
}
