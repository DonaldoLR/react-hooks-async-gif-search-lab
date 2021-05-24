import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
function GifListContainer() {
  const [arrayOfGifObjs, setArrayOfGifObjs] = useState([]);
  const fetchGifs = (searchText = "dolphin") => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=IIRTTw5a3M3zZbgw7oOzlIWE4h7ffARn&rating=g`
    )
      .then((res) => res.json())
      .then((data) => {
        // Take the first 3 objs from the fetch and have them in state ( as an array)
        setArrayOfGifObjs(data.data.slice(0, 3));
      });
  };
  useEffect(() => {
    fetchGifs();
    //Cleanup Function
    // return () => {
    //   cleanup;
    // };
  }, []);
  const handleFormSubmit = (searchText) => fetchGifs(searchText);
  return (
    <div>
      <GifSearch onFormSubmit={handleFormSubmit} />
      {arrayOfGifObjs.length ? (
        <GifList gifs={arrayOfGifObjs} />
      ) : (
        <h1>No Gifs Found</h1>
      )}
    </div>
  );
}

export default GifListContainer;
