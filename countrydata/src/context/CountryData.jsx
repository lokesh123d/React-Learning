import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CountryDataContext = createContext();

const CountryData = ({ children }) => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,languages"
        );
        setAllData(data);
        
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <CountryDataContext.Provider value={allData}>
      {children}
    </CountryDataContext.Provider>
  );
};

export default CountryData;