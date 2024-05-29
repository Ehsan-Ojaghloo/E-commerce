import React from "react";
import "./Search.scss";
import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <div className="search-con">
      <div className="search-inner">
        <CiSearch className="search-icon" />
        <input type="search" name="search-panel" id="search-panel" placeholder="Search" />
      </div>
    </div>
  );
}

export default Search;
