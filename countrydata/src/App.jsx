import React from "react";
import CountryList from "./components/CountryList";
import { Route, Routes } from "react-router-dom";
import CountryCard from "./components/CountryCard";
import CountryData from "./context/CountryData";
import Navbar from "./components/Navbar";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <Routes>
        <Route path="/country" element={<CountryList />} />
        <Route path="/country/:countryName" element={<CountryCard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <CountryData />
    </div>
  );
};

export default App;
