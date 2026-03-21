import React from "react";
import "./index.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const OtpSystem = ({ otpLength }) => {
  const [otpData, setotpData] = useState(new Array(otpLength).fill(""));

  let inputRef = useRef([]);

  function handleChange(value, index) {
    if (isNaN(value)) return;
    if (!value) return;
    let newData = [...otpData];
    newData[index] = value;
    setotpData(newData);
    inputRef.current[index + 1]?.focus();
  }

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  function handleBackSpace(value, index) {
    if (value == "Backspace") {
      let newVal = [...otpData];
      newVal[index] = "";
      setotpData(newVal);
      inputRef.current[index - 1]?.focus();
    }
  }


  function handleProceed(){
    alert('you are login successfully');
    
  }

  return (
    <div>
      {otpData.map((item, index) => {
        return (
          <input
            type="text"
            key={index}
            ref={(input) => (inputRef.current[index] = input)}
            value={otpData[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleBackSpace(e.key, index)}
            className="optInput"
          />
        );
      })}
      <button className="loginBtn" onClick={handleProceed}>Login</button>
    </div>
  );
};

export default OtpSystem;
