import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./component/Home"));
const About = lazy(() => import("./component/About"));
const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Modal...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
