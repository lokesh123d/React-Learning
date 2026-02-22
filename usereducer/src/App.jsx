// import React from "react";
// import { useReducer } from "react";

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   function reducer(state,action) {
//     // console.log(count);
//     switch (action.type) {
//       case "Increment":
//         return {count:state.count+1};
//       case "Decrment":
//         return {count:state.count-1};
//       case "Reset":
//         return {count:0};
//       default:
//         return state
//     }
//   }

//   return (
//     <div>
//       <h2>{state.count}</h2>
//       <button onClick={() => dispatch({ type: "Increment" })}>Incrament</button>
//       <button onClick={() => dispatch({ type: "Decrment" })}>Decrment</button>
//       <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
//     </div>
//   );
// };

// export default App;

// use memo
import React, { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function clickHandler() {
    setCount(prev => prev + 1);
  }

  const result = useMemo(() => {
    console.log("Heavy calculation running...");
    for (let i = 0; i < 500000000; i++) {}
    return count * 2;
  }, [count]);

  return (
    <div>
      <button onClick={clickHandler}>Hey</button>
      <p>count: {count}</p>
      <p>result: {result}</p>
    </div>
  );
}

export default App;