import React, { useEffect, useRef, useState } from "react";
import useDebounce from "./useDebounce";

const Debounce = () => {
  const [query, setquery] = useState("");

  const debounceFunction = useDebounce(query, 2000);

  useEffect(() => {
    if (debounceFunction) {
      console.log("we get this" + debounceFunction);
    }
  }, [debounceFunction]);

  return (
    <div>
      <input
        type="text"
        placeholder="search something"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
    </div>
  );
};

export default Debounce;
