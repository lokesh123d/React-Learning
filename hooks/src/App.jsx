import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState('');
  const count = useRef(0);

const inputItems = useRef(null);


  function handleClick(){
inputItems.focus();
  }

  return (
    <div>

    <input type="text"  value={value} onChange={(e)=>{
      setValue(e.target.value);
    count.current=count.current+1
    }}
    ref={inputItems}
    />
    <button onClick={handleClick}>Click Here</button>
    <p>Value:{value}</p>
    <p>Count:{count.current}</p>
    </div>
  )
}

export default App