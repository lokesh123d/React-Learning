import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CountryDataContext } from "../context/CountryData";
import RegionSearch from "./RegionSearch";

const CountryList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchByregion, setsearchByregion] = useState('');

  const navigate = useNavigate();
  const [countryData, setcountryData] = useState([]);
  const data = useContext(CountryDataContext);

  useEffect(() => {
    setcountryData(data);
  });

  function showDetails(countryName) {
    navigate(`/country/${countryName}`);
  }


  if (countryData.length === 0)
    return (
      <>
    
<div className="flex flex-wrap justify-center items-center gap-9 p-10 dark:bg-gray-900">
          {[...Array(12)].map((_, idx) => (
            <div
              key={idx}
              className="w-70 p-4 flex flex-col justify-center items-center"
            >
              <Skeleton height={160} width={280} className="mb-4" />
              <Skeleton height={28} width={200} className="mb-4" />
              <Skeleton height={40} width={120} className="rounded-md" />
            </div>
          ))}
        </div>
      </>
    );

  return (
    <>
      
      <div className="flex justify-between px-20 py-10 items-center pt-30">
        <Search searchInput={[searchInput, setSearchInput]} />
        <RegionSearch searchByregion={searchByregion} setsearchByregion={setsearchByregion}/>
</div>
      <div className="flex flex-wrap justify-center items-center gap-9 p-10 dark:bg-gray-900">
        {countryData
          .filter((val) => {
            const matchesSearch = searchInput.trim() === "" || 
              val.name.common.toLowerCase().includes(searchInput.trim().toLowerCase());
            const matchesRegion = searchByregion === "" || val.region === searchByregion;
            
            return matchesSearch && matchesRegion;
          })
          .map((val, idx) => (
            <div
              key={idx}
              className="rounded-md shadow-lg bg-white dark:bg-gray-700 w-70 p-4 flex flex-col justify-center items-center hover:scale-102 transition-al"
              onClick={() => {
                showDetails(val.name.common);
              }}
            >
              <img src={val.flags.png} alt={val.flags.alt} className="h-40" />
              <h2 className="p-4 font-bold text-[20px] dark:text-white">{val.name.common}</h2>
              <button
                className="bg-blue-400 dark:bg-blue-600 text-white transition-all px-5 py-2 rounded-md hover:scale-95"
                onClick={(e) => {
                  e.stopPropagation();
                  showDetails(val.name.common);
                }}
              >
                Know More
              </button>
            </div>
          ))}
      </div>
      <div className="flex gap-3 justify-center p-20 items-center">
        <button className="bg-blue-400 px-6 py-1 hover:scale-95">Prev</button>
        <span className="text-amber-300 text-2xl">1</span>
        <button className="bg-red-400 px-6 py-1 hover:scale-95">Next</button>
      </div>
    </>
  );
};

export default CountryList;
