import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react'
import { useState } from 'react'

const Otp = ({otpLength}) => {

    const [otpData, setotpData] = useState(new Array(otpLength).fill(''));

const inputRef = useRef([]);


console.log(otpData)

function handleChage(val,index){

    if(val.length==1){
           let newData = [...otpData];
   newData[index] = val;
   setotpData(newData)
inputRef.current[index+1]?.focus();
    }

//    let newData = [...otpData];
//    newData[index] = val.slice(-1);
//    setotpData(newData)
}


  return (  

    <div>
{
 otpData.map((val , index)=>{
    return(
        <input
         type="text" 
         key={index}
         value={otpData[index]} 
         ref={(input) => inputRef.current[index] = input}
        onChange={(e)=>handleChage(e.target.value,index)}
        />
    )
 })
}
    </div>
  )
}

export default Otp