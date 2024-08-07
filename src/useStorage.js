import { useState } from "react";

function useStorage(key, initialValue) {
  const [value, setValue] = useState(
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialValue
  );
  return [
    value,
    (value) => {
      setValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    },
  ];
}

export default useStorage;
