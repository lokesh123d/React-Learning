// i wanted to use the use callback , use memo , react .memo , lazy loading ;

import React, { useCallback, useMemo, useState } from "react";
import Chilld from "./Chilld";

const App = () => {
  const [render, setrender] = useState(0);
const [idontCare, setidontCare] = useState(0)



  console.log("Rendering Start ");

  // Use Callback Hook is use to Prevent the Recalculation of a function across all the re render but function is same and input and output was same for preventing this we are going to use the use callback hook here.


  
const foo = useCallback (function (){
   console.log("usecallback run now");
    for (let i = 0; i < 9374; i++) {}
    return 10;
},[])



const memoizeFunc = useMemo(()=>{
console.log('the memoize function run wihtout anyhting happend')
  for(let i = 0;i<200000000;i++){};
   return render;
},[render]);

console.log(memoizeFunc);


  console.log("Rendering End");
  return (
    <div>
      <button onClick={(e) => setrender(render + 1)}>
        Render Component Using Change the use State value
      </button>
      React.memo(<Chilld foo={foo}/>)
      <button onClick={(e)=> setidontCare(idontCare+1)}>i dont care button i am </button>
    </div>
  );
};

export default App;
