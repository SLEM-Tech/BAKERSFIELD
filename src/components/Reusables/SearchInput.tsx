import React, { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { HiListBullet } from "react-icons/hi2";

interface SearchInputProps {
  placeholder?: string;
  searchValue?: string; // External searchValue
  setSearchQuery: (query: string) => void;
  isLoading?: boolean;
  onSearch?: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  searchValue: externalSearchValue, // External searchValue prop
  setSearchQuery,
  isLoading = false,
  onSearch,
}) => {
  // Internal state used only if externalSearchValue is not provided
  const [internalSearchValue, setInternalSearchValue] = useState("");

  const currentSearchValue = externalSearchValue ?? internalSearchValue;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (externalSearchValue !== undefined) {
      setSearchQuery(newValue); // Update external state
    } else {
      setInternalSearchValue(newValue); // Update internal state
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onSearch) {
      onSearch();
    }
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch();
    }
  };

  return (
    <div
      className={`xs:w-[150px] md:w-[300px] lg:w-[500px] flex items-center justify-center px-5 bg-gray-100 rounded-3xl overflow-hidden`}
    >
      {isLoading ? (
        <ImSpinner2 className="animate-spin mx-auto"/>
      ) : (
        <IoSearchOutline
          onClick={handleSearchClick}
          size={30}
          cursor="pointer"
          color="#374151"
          className="text-gray-700 mx-auto pr-4"
        />
      )}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full flex-1 text-base text-black/70 pl-2 py-1 border-none outline-none bg-transparent transition"
        value={currentSearchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchInput;
