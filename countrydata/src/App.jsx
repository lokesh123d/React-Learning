import React from "react";
import CountryList from "./components/CountryList";
import { Route, Routes } from "react-router-dom";
import CountryCard from "./components/CountryCard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/:countryName" element={<CountryCard />} />
      </Routes>
    </div>
  );
};

export default App;
