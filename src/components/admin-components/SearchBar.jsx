import { IoIosCloseCircleOutline, IoIosSearch } from "react-icons/io";
import React, { useState } from "react";
import SearchResultsList from "./SearchResultsList";

const SearchBar = () => {
  const [inputData, setInputData] = useState("");

  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const inputPassed = (value) => {
    setInputData(value);
    fetchData(value);
  };

  const [searchBarActive, setSearchBarActive] = useState(false);

  const openSearchList = () => {
    setSearchBarActive(true);
  };

  const inputDeleted = () => {
    setInputData("");
    setSearchBarActive(false);
    fetchData([]);
  };

  return (
    <div className="flex flex-row items-center w-64 bg-background-components border-border-secondary border-[1px] rounded-lg">
      <input
        type="text"
        className="text-text-disabled bg-background-components text-sm font-semibold px-2 w-full h-8 rounded-l-lg focus:outline-none"
        value={inputData}
        onChange={(e) => inputPassed(e.target.value)}
        onFocus={openSearchList}
      />
      {inputData && (
        <IoIosCloseCircleOutline
          onClick={inputDeleted}
          className="cursor-pointer"
        />
      )}
      <IoIosSearch className="text-3xl pr-2 font-bold cursor-pointer" />
      {searchBarActive && (
        <div className="origin-top-right absolute right-20 top-[48px] mt-2 mr-2 w-64 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <SearchResultsList results={results} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
