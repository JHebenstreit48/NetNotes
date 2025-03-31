import React from "react";
import { Link } from "react-router-dom";

interface SearchModalProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  results: { name: string; path: string; breadcrumbs: string[] }[];
  searchMode: "instant" | "manual";
  setSearchMode: (mode: "instant" | "manual") => void;
  onSearch: (value: string) => void;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({
  searchTerm,
  setSearchTerm,
  results,
  searchMode,
  setSearchMode,
  onSearch,
  onClose,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchMode === "manual" && e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  const handleModeToggle = (mode: "instant" | "manual") => {
    setSearchMode(mode);
    localStorage.setItem("searchMode", mode);
  };

  return (
    <div className="searchModalOverlay">
      <div className="searchModalContent">
        <div className="searchModalHeader">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <button onClick={onClose} className="closeButton">×</button>
        </div>

        <div className="searchModeToggle">
          <label>
            <input
              type="radio"
              checked={searchMode === "instant"}
              onChange={() => handleModeToggle("instant")}
            />
            Instant
          </label>
          <label>
            <input
              type="radio"
              checked={searchMode === "manual"}
              onChange={() => handleModeToggle("manual")}
            />
            Manual
          </label>
        </div>

        <div className="searchResults">
          {results.length === 0 ? (
            <div className="searchResultEmpty">No results found.</div>
          ) : (
            <ul>
              {results.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} onClick={onClose}>
                    <strong>{item.name}</strong>{" "}
                    <span className="breadcrumbs">
                      ({item.breadcrumbs.join(" > ")})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
