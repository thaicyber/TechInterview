import { useCallback, useState } from "react";

const useInput = (initValue = null) => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback(e => {
    if (e && e.target && e.target.value) {
      setValue(e.target.value);
    } else {
      setValue(initValue);
    }
  }, []);
  return [value, handler];
};

export default useInput;
