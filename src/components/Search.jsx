// Search.jsx
import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

const FoodSearch = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <Search
      placeholder="Search food..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onSearch={handleSearch}
    />
  );
};

export default FoodSearch;
