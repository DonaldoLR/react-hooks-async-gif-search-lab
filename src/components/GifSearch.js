import React, { useState } from "react";

const GifSearch = ({ onFormSubmit }) => {
  const [searchText, setSearchText] = useState("");
  const handleTextChange = (e) => {
    setSearchText((prevState) => (prevState = e.target.value));
  };
  const formSubmission = (e) => {
    e.preventDefault();
    onFormSubmit(searchText);
    setSearchText("");
  };
  return (
    <form onSubmit={formSubmission}>
      <label className="form-label">
        Enter a Search Term:
        <input
          type="text"
          value={searchText}
          onChange={handleTextChange}
        ></input>
      </label>

      <button type="submit" className="btn btn-success">
        Find Gifs
      </button>
    </form>
  );
};

export default GifSearch;
