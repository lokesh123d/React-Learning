import React from "react";
import { useContext } from "react";
import { UserContext } from './App.jsx'
const Home = ()=>{
   const userData = useContext(UserContext);

    return (
        <>
        {console.log(userData)}
        </>
    )
}

export default Home;