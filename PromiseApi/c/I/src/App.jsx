import React, { useRef, useEffect } from "react";

const App = () => {
  const prevTime = useRef(0);

  function scrollFunc() {
    console.log("scroll event running...");
  }

  function throttle(func, delay) {
    return function (...args) {
      const now = Date.now();

      if (now - prevTime.current > delay) {
        func(...args);
        prevTime.current = now;
      }
    };
  }

  useEffect(() => {
    const throttledScroll = throttle(scrollFunc, 2000);

    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  return (
    <div style={{ height: "2000px" }}>
      Scroll and check console
    </div>
  );
};

export default App;