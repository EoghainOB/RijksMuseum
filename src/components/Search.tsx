import React from "react";
import { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";
import { ContextType } from "../types";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { setData, searchSuggest } = useContext(AppContext) as ContextType;
  const [search, setSearch] = useState("" as string);
  const [matchingSuggestions, setMatchingSuggestions] = useState(
    [] as string[]
  );
  const navigate = useNavigate();

  const handleSearch = (suggestion: string) => {
    setSearch(suggestion);
    axios
      .get(
        `https://www.rijksmuseum.nl/api/en/collection?key=6x1qSUeZ&q=${suggestion}&ps=100`
      )
      .then((res) => {
        if (res.data && res.data.artObjects) {
          setData(res.data.artObjects);
          setSearch("");
          navigate("/results");
        } else {
          console.log("No results found");
        }
      });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);

    const matching = searchSuggest.filter((suggest) =>
      suggest.toLowerCase().startsWith(inputValue.toLowerCase())
    );

    setMatchingSuggestions(matching);
  };

  return (
    <form className="search-form">
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search Dutch masters"
          onChange={handleInput}
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
      </div>
      <button type="submit" onClick={handleSearch.bind(null, search)}>
        Search
      </button>
    </form>
  );
};

export default Search;
