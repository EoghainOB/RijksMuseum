import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../AppContext";
import { ContextType } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);
  const {
    setCentury,
    century,
    setSearch,
    search,
    setSearchTerm,
    page,
    setData,
    searchSuggest,
  } = appContext as ContextType;

  const [matchingSuggestions, setMatchingSuggestions] = useState(
    [] as string[]
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    const matching = searchSuggest.filter((suggest) =>
      suggest.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setMatchingSuggestions(matching);
  };

  const handleInputFocus = () => {
    setSearch("");
    setMatchingSuggestions([]);
  };

  const handleSearch = (suggestion: string) => {
    setSearch(suggestion);
    setSearchTerm(suggestion);
    let updatedSearchTerm = suggestion.replace(/\s+/g, "+");
    axios
      .get(
        `https://www.rijksmuseum.nl/api/en/collection?key=6x1qSUeZ&q=${updatedSearchTerm}&ps=10&p=${page}`
      )
      .then((res) => {
        if (res.data.artObjects) {
          setData(res.data.artObjects);
          if (page === 1) navigate("/results");
          setMatchingSuggestions([]);
          setCentury(0);
        } else {
          console.log("No results found");
        }
      });
  };

  const handleDateSearch = (century: number) => {
    if (century) {
      setCentury(century);
      axios
        .get(
          `https://www.rijksmuseum.nl/api/en/collection?key=6x1qSUeZ&f.dating.period=${century}&ps=10&p=${page}`
        )
        .then((res) => {
          if (res.data.artObjects) {
            setData(res.data.artObjects);
            setMatchingSuggestions([]);
            setSearch("");
            setSearchTerm("");
            if (page === 1) navigate("/results");
          } else {
            console.log("No results found");
          }
        });
    }
  };

  useEffect(() => {
    search ? handleSearch(search) : handleDateSearch(century);
    // eslint-disable-next-line
  }, [page]);

  const centuries = [
    { name: "8th", value: 8 },
    { name: "9th", value: 9 },
    { name: "10th", value: 10 },
    { name: "11th", value: 11 },
    { name: "12th", value: 12 },
    { name: "13th", value: 13 },
    { name: "14th", value: 14 },
    { name: "15th", value: 15 },
    { name: "16th", value: 16 },
    { name: "17th", value: 17 },
    { name: "18th", value: 18 },
    { name: "19th", value: 19 },
    { name: "20th", value: 20 },
    { name: "21st", value: 21 },
  ];

  return (
    <div>
      <form className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search Dutch masters"
            onChange={handleInput}
            onFocus={handleInputFocus}
            value={search}
          />
          {matchingSuggestions.length > 0 && search && (
            <ul className="suggestions-dropdown">
              {matchingSuggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => handleSearch(suggestion)}
                  className="suggestion"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
          <span className="input-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
      </form>
      <div className="centuryText">
        <ul>
          <li>
            <p>Search by century:</p>
          </li>
          {centuries.map((century) => (
            <li key={century.value}>
              <button onClick={() => handleDateSearch(century.value)}>
                {century.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="centurySelect">
        <ul>
          <li className="selectTitle">
            <p>Search by century:</p>
          </li>
          <li className="selectDropdown">
            <select
              onChange={(e) => handleDateSearch(parseInt(e.target.value))}
            >
              <option value="">Select century</option>
              {centuries.map((century) => (
                <option key={century.value} value={century.value}>
                  {century.name} century
                </option>
              ))}
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
