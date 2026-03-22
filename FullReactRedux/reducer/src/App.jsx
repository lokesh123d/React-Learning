// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { fetchuser } from "./data";
// import Reducersa from "./Reducersa";

// const App = () => {
//   const [userData, setuserData] = useState({
//     users: ["lokesh"],
//     loading: false,
//     error: null,
//   });

//   const [adduser, setAddUser] = useState("");

//   async function fetchData() {
//     try {
//       setuserData((prev) => ({ ...prev, loading: true }));
//       const result = await fetchuser();
//       setuserData({
//         ...userData,
//         users: [...userData.users, ...result],
//       });
//     } catch (e) {
//       setuserData({ ...userData, loading: false });
//       setuserData((prev) => ({ ...prev, error: e }));
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function addUserFunction() {
//     setuserData({ ...userData, users: [...userData.users, adduser] });
//     setAddUser("");
//   }

//   // if(userData.loading){
//   //   return <h2>Loading.......</h2>
//   // }

//   //   if (userData.error) {
//   //     return <>{userData.error}</>;
//   //   }
//   return userData.loading ? (
//     <h2>Loading.....</h2>
//   ) : userData.error ? (
//     <h2>{userData.error}</h2>
//   ) : (
//     <div>
//       <h2>Users here</h2>
//       <input
//         type="text"
//         value={adduser}
//         onChange={(e) => setAddUser(e.target.value)}
//       />
//       <button onClick={addUserFunction}>Add user</button>
//       {userData.users.map((user, index) => (
//         <h3 key={index}>{user}</h3>
//       ))}




//     </div>
//   );
// };

// export default App;

import React from 'react'
import Reducersa from './Reducersa'

const App = () => {
  
  return (
    <div><Reducersa/>
</div>
  )
}

export default App