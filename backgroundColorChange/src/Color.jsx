import React from "react";
import { useState } from "react";

const Color = ({ colorCollection }) => {
  const [backColor, setBackColor] = useState("black");
  function chageBackground(color) {
    setBackColor(color);
  }
  return (
    <div style={{ background:  backColor  }} className="conainer">
      {colorCollection.map((val, idx) => {
        return (
          <button
            key={idx}
            
            onClick={(e) => {
              chageBackground(val);
            }}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
};

export default Color;
