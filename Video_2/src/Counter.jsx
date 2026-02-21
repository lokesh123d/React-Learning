import React, { useEffect, useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  const [color, setColor] = useState('black')
  useEffect(
    function () {
      if (count > 0) {
        setColor('green');
      } else if (count < 0) {
        setColor('red');
      } else {
        setColor('black');
      }
    },
    [count],
  );



  function increase() {
    setCount((count = count + 1));
  }
  function decrease() {
    setCount((count = count - 1));
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <h1>Counter App</h1>

      <h2 style={{ color: color, fontSize: "40px" }}>{count}</h2>
      <div className="">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
