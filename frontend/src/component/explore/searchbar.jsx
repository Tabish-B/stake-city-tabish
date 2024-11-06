import React, { useState, useRef, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);

  const toggleSearchBar = () => {
    if (isSearchBarVisible) {
      if (searchQuery.trim() === "") {
        setIsSearchBarVisible(false);
      } else {
        handleSearchSubmit();
      }
    } else {
      setIsSearchBarVisible(true);
    }
  };

  useEffect(() => {
    if (isSearchBarVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchBarVisible]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (onSearch && searchQuery.trim() !== "") {
      onSearch(searchQuery);
      setSearchQuery("");
      setIsSearchBarVisible(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e);
    }
  };

  return (
    <div className="fixed bottom-[6.5rem] sm:bottom-[8rem] left-1/2 transform -translate-x-1/2 z-50 flex items-center">
      <input
        type="text"
        ref={inputRef}
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter Location"
        className={`py-2 px-4 rounded-full text-black bg-white border-4 border-black/30 outline-none text-center transition-transform duration-300 ease-in-out transform ${isSearchBarVisible ? 'translate-x-9 opacity-100 pointer-events-auto w-48 sm:w-60' : 'translate-x-24 opacity-0 pointer-events-none w-0'
          }`}
      />

      <button
        onClick={toggleSearchBar}
        className={`flex justify-center items-center bg-[#33669C] rounded-full cursor-pointer transform transition-all duration-200 ease-in-out shadow-[inset_0_-10px_0px_rgba(0,0,0,0.15),0_5px_4px_rgba(0,0,0,0.25)] ${isSearchBarVisible ? 'translate-x-1' : '-translate-x-1/2'
          } hover:shadow-[inset_0_-5px_0px_rgba(0,0,0,0.25),0_2px_2px_rgba(0,0,0,0.75)] w-10 h-10 sm:w-12 sm:h-12`}
      >
        <img
          src="/search-icon.svg"
          alt="Search"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      </button>
    </div>
  );
};

export default SearchBar;