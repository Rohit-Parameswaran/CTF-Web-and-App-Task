import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  // const enterCheck = document.getElementsByClassName("search-bar");

  // enterCheck.addEventListener("keyup", (event) => {
  //   if (event.keyCode === 13) {
  //     event.preventDefault();
  //     document.getElementsByClassName("divider")[0].scrollIntoView();
  //   }
  // });

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        name="search-bar"
        id="search-bar"
        placeholder="Search for your favourite dish here..."
        onChange={(event) => {
          props.onChange(event.target.value.toLowerCase());
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            document.getElementsByClassName("divider")[0].scrollIntoView();
          }
        }}
      />
      <div className="search-icon">
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};

export default SearchBar;
