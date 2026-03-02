import React from "react";

const RegionSearch = ({searchByregion,setsearchByregion}) => {
    
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <label
        htmlFor="regionSearch"
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Filter by Region:
      </label>
      <select
        name="region"
        className="
          w-60
          px-4 py-2
          bg-white dark:bg-gray-700
          border border-gray-300 dark:border-gray-600
          rounded-lg
          shadow-sm
          text-gray-700 dark:text-white
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition duration-200
          cursor-pointer
        "
        id="regionSearch"
value={searchByregion}
        onChange={(e) => setsearchByregion(e.target.value)}      >
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antarctic</option>
      </select>
    </div>
  );
};

export default RegionSearch;
