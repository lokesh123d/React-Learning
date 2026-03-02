import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CountryDataContext } from "../context/CountryData";

const CountryCard = () => {
  const navigate = useNavigate();
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState(null);

  const data = useContext(CountryDataContext);

  useEffect(() => {
    const selectedCountry = data.find(
      (country) => country.name.common.toLowerCase() === countryName.toLowerCase()
    );

    setCountryData(selectedCountry || null);
  }, [countryName, data]);

  if (!countryData)
    return (
      <div className="max-w-100 mx-auto m-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700">
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
    <div className="  absolute mt-30 flex flex-col justify-self-center max-w-100 mx-auto  p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700 
    ">

      <img
        src={countryData.flags.png}
        alt={countryData.name.common}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-3xl font-bold mb-4 dark:text-white">{countryData.name.common}</h2>
      <div className="space-y-2 dark:text-gray-200">
        <p>
          <span className="font-semibold">Capital:</span>{" "}
          {countryData.capital?.[0] || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Population:</span>{" "}
          {countryData.population?.toLocaleString() || "N/A"}
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
        className="bg-gray-400 dark:bg-gray-600 text-white px-5 py-2 mt-3 rounded-md flex justify-self-center"
        onClick={() => navigate(-1)}
      >
        Back to Home
      </button>
    </div>
  );
};

export default CountryCard;
