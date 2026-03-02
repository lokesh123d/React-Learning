// import React from "react";
// import { UserProvider } from "./contexts/UserContext";
// import { ThemeProvider } from "./contexts/ThemeContext";
// import UserProfile from "./components/UserProfile";
// import ThemeSwitcher from "./components/ThemeSwitcher";
// import ContextInfo from "./components/ContextInfo";

// const App = () => {
//   return (
//     <ThemeProvider>
//       <UserProvider>
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//           <h1 className="text-3xl font-bold mb-6">Multi-Context Demo</h1>
//           <ThemeSwitcher />
//           <UserProfile />
//           <ContextInfo />
//         </div>
//       </UserProvider>
//     </ThemeProvider>
//   );
// };

// export default App;


// import React, { useRef } from 'react'


// const App = () => {
// const inputRef = useRef(null);


// function change(){
//   inputRef.current.classList.add('new')
// }
//   return (
//     <div>
// <input type="text" ref={inputRef} />
// <button onClick={change}>Click</button>     
//     </div>
//   )
// }

// export default App




// import { useRef } from "react";
//     function App() {
//       const reference = useRef(true);
//       const handleUpdate = () => {
//         reference.current = !reference.current;
//         console.log(reference.current);
        
//       };
//       console.log(reference.current); // true
//       return <button onClick={handleUpdate}>Update</button>;
//     }


//     export default App





// import { useState, useRef, useEffect } from 'react';
    
//     function App() {
//       const [count, setCount] = useState(0);
//       const previousCountRef = useRef(count); // Store previous count in a ref
    
//       useEffect(() => {
  
        
//         if (previousCountRef.current !== count) {

//           console.log('Count changed:', count, '(Previous:', previousCountRef.current, ')');
//         }
//         previousCountRef.current = count; // Update the ref
//       }, [count]); // Run the effect only when count changes
    
//       return (
//         <div>
//           <p>Count: {count}</p>
//           <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//       );
//     }


//     export default App




// import  { useState, useRef, useEffect } from 'react';
    
//     function App() {
//       const [seconds, setSeconds] = useState(0);
//       const timerRef = useRef(null); // Ref to store the timer ID
    
//       const startTimer = () => {
//         timerRef.current = setInterval(() => {
//           setSeconds((prevSeconds) => prevSeconds + 1);
//         }, 1000); // Update every second
//       };
    
//       const stopTimer = () => {
//         clearInterval(timerRef.current);
//       };
    
//       const resetTimer = () => {
//         clearInterval(timerRef.current);
//         setSeconds(0);
//       };
    
//       // Cleanup function to clear the interval when the component unmounts
//       useEffect(() => {
//         return () => clearInterval(timerRef.current);
//       }, []);
    
//       return (
//         <div>
//           <p>Time elapsed: {seconds} seconds</p>
//           <button onClick={startTimer}>Start</button>
//           <button onClick={stopTimer}>Stop</button>
//           <button onClick={resetTimer}>Reset</button>
//         </div>
//       );
//     }


//     export default App






