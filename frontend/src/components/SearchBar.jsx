import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value);
  };

  const handleClear = () => {
    setQuery("");
    if (onSearch) onSearch("");
  };

  return (
    <div className="search-bar card fade-up">
      <div className="search-input-wrapper">

        <span className="search-icon">🔍</span>

        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search tasks by title, priority, or status..."
          className="search-input"
        />

        {query && (
          <button className="clear-btn" onClick={handleClear}>
            ✕
          </button>
        )}

      </div>
    </div>
  );
}

export default SearchBar;