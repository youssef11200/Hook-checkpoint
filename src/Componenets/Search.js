import React from "react";
import Rating from "@mui/material/Rating";

const Search = ({ setFindData, ratetoadd }) => {
  return (
    <div>
      <input text="" onChange={(e) => setFindData(e.target.value)} />
      <Rating
        name="simple-controlled"
        onChange={(event, newValue) => {
          ratetoadd(newValue);
        }}
      />
    </div>
  );
};

export default Search;
