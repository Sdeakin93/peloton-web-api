import { useState } from "react";

export const useInput = (val = "") => {
  const [value, setValue] = useState(val);
  const handleEvent = (e) => setValue(e.target.value) ?? [];

  return [value, handleEvent];
};
