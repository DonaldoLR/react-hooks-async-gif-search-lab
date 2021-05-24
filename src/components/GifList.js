import React from "react";

const GifList = ({ gifs }) => {
  const gifList = gifs.map((gif) => {
    return (
      <li key={gif.id}>
        <img src={gif.images.original.url} alt="Gif"></img>
      </li>
    );
  });
  return <ul>{gifList}</ul>;
};

export default GifList;
