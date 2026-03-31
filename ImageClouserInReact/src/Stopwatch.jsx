import React, { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const setTime = useRef(60);
  const [currentTime, setcurrentTime] = useState(setTime.current);
  const [isPause, setIsPause] = useState(false);
  const [isRunning, setisRunning] = useState(false);
  const [customeTimer, setcustomeTimer] = useState("");

  useEffect(() => {
    if (isRunning) {
      let timer = setInterval(() => {
        if (currentTime == 0 || isPause) {
          clearInterval(timer);
        } else {
          setcurrentTime(currentTime - 1);
        }
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [currentTime, isPause, isRunning]);

  return (
    <div>
      {currentTime}
      {currentTime == 0 ? (
        <button onClick={() => setcurrentTime(setTime.current)}>Restart</button>
      ) : isRunning ? (
        <button onClick={() => setIsPause(!isPause)}>
          {isPause ? "Resume" : "Pause"}
        </button>
      ) : (
        <button onClick={() => setisRunning(true)}>Start</button>
      )}

      <input
        type="number"
        placeholder="Enter Timer Time"
        onChange={(e) => {
          setcustomeTimer(e.target.value);
        }}
        value={customeTimer}
      />

      <button
        onClick={() => {
          setisRunning(true);
          setcurrentTime(customeTimer);
          setcustomeTimer("");
        }}
      >
        setTimer
      </button>
    </div>
  );
};

export default Stopwatch;
