import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import countryContext from "../context/CountryDetails";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const CountryList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [cardName, setcardName] = useContext(countryContext);
  const navigate = useNavigate();

  const [countryData, setcountryData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(import.meta.env.VITE_COUNTRY_API_KEY);
      setcountryData(data);
    }
    fetchData();
  }, []);

  function showDetails(countryName) {
    setcardName(countryName);
    navigate(`/${countryName}`);
  }
  
  if (countryData.length === 0) return (
    <>
      <Search searchInput={[searchInput, setSearchInput]} />
      <div className="flex flex-wrap justify-center items-center gap-9 p-10">
        {[...Array(12)].map((_, idx) => (
          <div key={idx} className=" w-70 p-4 flex flex-col justify-center items-center">
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
    
      <Search searchInput={[searchInput, setSearchInput]} />
      <div className="flex flex-wrap justify-center items-center gap-9 p-10">
        {countryData
          .filter((val) => {
            if (searchInput.trim() === "") return true;
            return val.name.common
              .toLowerCase()
              .includes(searchInput.trim().toLowerCase());
          })
          .map((val, idx) => (
            <div
              key={idx}
              className=" rounded-md shadow-lg bg-white w-70 p-4 flex flex-col justify-center items-center hover:scale-102 transition-all"
              onClick={() => {
                showDetails(val.name.common);
              }}
            >
              <img src={val.flags.png} alt={val.flags.alt} className="h-40" />
              <h2 className="p-4 font-bold text-[20px]">{val.name.common}</h2>
              <button
                className="bg-blue-400 text-white transition-all px-5 py-2 rounded-md hover:scale-95"
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
    </>
  );
};

export default CountryList;
