import React, { useEffect, useState } from "react";

const useDebounce = ({ value = "", delay = 2000 }) => {
  const [debouceValue, setdebouceValue] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => {
      setdebouceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouceValue;
};

export default useDebounce;
