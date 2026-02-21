import { createContext } from "react";

export const DataContext = createContext();


 export const DataProvider = ({children})=>{
   const userData = {
    name:"lokesh dangwal",
    class:'12th pass out'
   }
    return(
        <DataContext.Provider value={{userData}}>
            {children}
        </DataContext.Provider>
    )
}