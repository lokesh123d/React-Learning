import React, { useContext, useEffect, useState } from "react";
import countryContext from "../context/CountryDetails";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CountryCard = () => {
  const navigate = useNavigate();
  const [cardName] = useContext(countryContext);
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${cardName}?fullText=true`,
      );
      setCountryData(response.data[0]);
    }
    if (cardName) {

      fetchData();
    }
  }, [cardName]);

  
  if (!countryData)
    return (
      <div className="max-w-100 mx-auto m-10 p-6 bg-white rounded-lg shadow-lg">
        <Skeleton height={256} className="rounded-md mb-4" />
        <Skeleton height={36} width="60%" className="mb-4" />
        <div className="space-y-2">
          <Skeleton height={24} width="80%" />
          <Skeleton height={24} width="70%" />
          <Skeleton height={24} width="75%" />
          <Skeleton height={24} width="85%" />
        </div>
        <Skeleton height={40} width={140} className="mt-3 rounded-md" />
      </div>
    );

  return (
    <div className="max-w-100 mx-auto m-10 p-6 bg-white rounded-lg shadow-lg">

      <img
        src={countryData.flags.png}
        alt={countryData.name.common}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-3xl font-bold mb-4">{countryData.name.common}</h2>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Capital:</span>{" "}
          {countryData.capital?.[0] || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Population:</span>{" "}
          {countryData.population.toLocaleString()}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {countryData.region}
        </p>
        <p>
          <span className="font-semibold">Language:</span>{" "}
          {countryData.languages
            ? Object.values(countryData.languages)[0]
            : "N/A"}
        </p>
      </div>
      <button
        className="bg-gray-400 text-white px-5 py-2 mt-3 rounded-md flex justify-self-center"
        onClick={() => navigate(-1)}
      >
        Back to Home
      </button>
    </div>
  );
};

export default CountryCard;
