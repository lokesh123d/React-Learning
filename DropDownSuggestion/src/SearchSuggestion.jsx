import React, { useEffect, useState } from "react";
import fetchLangaugeData from "./data";

const SearchSuggestion = () => {
  const [listData, setlistData] = useState([]);
  async function fetchsome() {
    const res = await fetchLangaugeData();
    setlistData(res);
  }
  useEffect(() => {
    fetchsome();
  }, []);

  const [searchQuery, setsearchQuery] = useState("");
  const [suggestionData, setsuggestionData] = useState([]);

  useEffect(() => {
    if (searchQuery != "") {
      function filterData() {
        let filterTask = listData.filter((item) =>
          item.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
        );
        setsuggestionData(filterTask);
      }
      filterData();
    } else {
      setsuggestionData([]);
    }
  }, [searchQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Programing Langauge......"
        value={searchQuery}
        onChange={(e) => setsearchQuery(e.target.value)}
    autoFocus
      />

      <div className="suggestion-container">
        {suggestionData.map((item, index) => {
          return (
            <div className="suggestion" key={index} tabIndex={0}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchSuggestion;
