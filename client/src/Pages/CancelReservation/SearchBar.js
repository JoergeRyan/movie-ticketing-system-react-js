import React from 'react';
import { Input } from 'antd';

const SearchBar = ({ onSearch }) => {
  return (
    <Input
      placeholder="Search tickets"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;