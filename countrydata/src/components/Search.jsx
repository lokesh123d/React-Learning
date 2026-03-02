import React, { useEffect, useState } from "react";

const Search = (props) => {
  return (
    <div>
      <input
        type="text"
        className="bg-gray-200 w-100 px-3 py-2 outline-1 rounded-md border-0 focus:bg-gray-100"
        placeholder="Search Country......"
        value={props.searchInput[0]}
        onChange={(e) => props.searchInput[1](e.target.value)}
      />
    </div>
  );
};

export default Search;
