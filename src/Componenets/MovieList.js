import React from "react";
import MovieCard from "./MovieCard";
import {Link} from "react-router-dom"
export const MovieList = ({ Data }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        backgroundColor: "rgb(117, 105, 105)",
      }}
    >
      {Data.map((movie) => (<Link to={`/Details/${movie.id}`}>
        <MovieCard movie={movie} key={movie.id} /></Link>
      ))}
    </div>
  );
};
