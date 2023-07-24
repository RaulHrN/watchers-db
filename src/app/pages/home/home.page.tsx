import React, { useEffect, useState } from "react";
import { popularMoviesApi } from "../../../services/tmdbApi";

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      popularMoviesApi.get('/movie/popular')
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.error('Erro ao obter filmes populares:', error);
        });
    }, []);
  
    return (
      <>
        {movies.map((movie:any) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.overview}</p>
          </div>
        ))}
      </>
    );
  };
