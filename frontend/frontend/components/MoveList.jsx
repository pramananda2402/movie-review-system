import React from "react";
import MovieCard from "./MovieCard";

const MoveList = () => {
  return (
    <div className="my-2 overflow-x-auto">
      <div className="flex gap-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default MoveList;
