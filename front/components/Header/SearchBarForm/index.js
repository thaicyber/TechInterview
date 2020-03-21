import React from "react";
import { SearchBarFormWrapper, SearchBarInput } from "./style";
const SearchBarForm = () => {
  return (
    <SearchBarFormWrapper>
      <SearchBarInput type="search"></SearchBarInput>
      <SearchBarInput type="submit"></SearchBarInput>
    </SearchBarFormWrapper>
  );
};

export default SearchBarForm;
