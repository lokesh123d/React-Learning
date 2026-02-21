import React from "react";
import { createContext } from "react";
import Home from './Home.jsx'


export const UserContext = createContext();
const App = ()=>{
const user = {
  "userName":'lokesh'
}
  return(
  <>
 <UserContext.Provider value={user}>
  <Home />
 </UserContext.Provider>
  </>
)
}

export default App