import React, { useEffect } from "react";
import { useTmdb } from "../../../provider/TmdbContext";
import { MovieTmdb } from "../../shared/models/tmdb";

export const HomePage = () => {
  const { popularMovies, searchPopularMovies } = useTmdb();

  useEffect(() => {
    searchPopularMovies();
  }, [searchPopularMovies]);

  return (
    <>
      {!!popularMovies && (
        <div>
          Listagem
          {popularMovies.map((movie: MovieTmdb) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
