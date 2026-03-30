import React, { useEffect, useState } from "react";

const TrafficLight = ({ seq, time }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setcurrentTime] = useState(time[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => {
          if (prev === seq.length - 1) {
            setcurrentTime(time[prev-1])
          return 0;
        }
        setcurrentTime(time[prev+1])
        return prev + 1;

      });
    }, time[currentIndex] * 1000);

    return () => clearTimeout(timer); // cleanup
  }, [currentIndex, seq.length, time]);


  useEffect(()=>{
let timer = setInterval(()=>{
return setcurrentTime(prev =>prev-1);
},1000)


return ()=>{
    clearInterval(timer);
}
  },[currentTime])

  return (
    <div>
      <h3>Time: {time[currentIndex]} sec</h3>
     <h4> Remaining Time :{currentTime}</h4>

      {seq.map((light, index) => (
        <div
          key={index}
          className={`traffic-light ${
            index === currentIndex ? `${light}-light` : ""
          }`}
        ></div>
      ))}
    </div>
  );
};

export default TrafficLight;