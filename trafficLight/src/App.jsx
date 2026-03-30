import React from "react";
import TrafficLight from "./TrafficLight";

const App = () => {
  return (
    <div>
      <TrafficLight seq={["green", "yellow", "red"]} time={[120, 20, 60]} />
    </div>
  );
};

export default App;
