import React, { useState } from "react";

function Player({ playerDet }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1> {playerDet}</h1>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>increase kar</button>
      </div>
    </div>
  );
}
    
export default Player;
