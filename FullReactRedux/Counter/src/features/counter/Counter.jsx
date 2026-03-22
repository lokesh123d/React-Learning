import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setincrementAmount] = useState(0)

  if(isNaN(incrementAmount)){
    setincrementAmount(0);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input type="text" placeholder="Write Amount"  value={incrementAmount} onChange={(e)=>setincrementAmount(e.target.value)}/>
      <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>incrementByAmount</button>
    </div>
  );
};

export default Counter;
