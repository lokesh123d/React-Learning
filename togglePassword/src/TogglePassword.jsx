import React, { useState } from "react";

const TogglePassword =()=>{
    let [type, setType] = useState('password');
    const [text, setText] = useState('Show Password.....')
    function showPassword(){
      if (type === "text") {
    setType("password");
    setText("Show Password.....");
  } else {
    setType("text");
    setText("Hide Password......");
  }
    }
    return(
    <>
    <input type={type}  />
    <button onClick={showPassword}>{text}</button>    
        </>
    )
}

export default TogglePassword;