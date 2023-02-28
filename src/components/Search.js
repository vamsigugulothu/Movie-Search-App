import React, { useState } from "react";


const Search = (props) => {
  const [value, setSearchValue] = useState("");
  
  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.search(value);
    setSearchValue("")
  }

  return (
      <form className="container-form">
        <input
          value={value}
          onChange={handleOnChange}
          type="text"
        />
        <input onClick={handleOnSubmit} type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;