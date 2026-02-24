import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,increaseBy5 } from './redux/features/CounterSlice';

const App = () => {


const dispatch = useDispatch();
const count = useSelector((state)=>state.counter.value);

  return (
    <div>
      <h1>{count}</h1>
      <button
      onClick={()=>{
dispatch(increment());
      }}
      >increment</button>
      <button
      onClick={()=>{
dispatch(decrement());
      }}
      >decrement</button>
      <button
      onClick={()=>{
        dispatch(increaseBy5());
      }}
      >
        increse by 5
      </button>
    </div>
  )
}

export default App