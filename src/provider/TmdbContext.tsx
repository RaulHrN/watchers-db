import React, { useState, useEffect } from "react";
import { MovieTmdb, TvTmdb } from "../app/shared/models/tmdb";
import { tmdbApi } from "../services/tmdbApi";

type TmdbContextType = {
  searchMovies: (query: string) => void;
  searchTvShows: (query: string) => void;
  searchPopularMovies: () => void;
  searchPopularTvShows: () => void;
  movies: MovieTmdb[];
  tvShows: TvTmdb[];
  popularMovies: MovieTmdb[];
  popularTvShows: TvTmdb[];
};

export const TmdbContext = React.createContext<TmdbContextType>(
  {} as TmdbContextType
);

export const TmdbProvider = (props: any) => {
  const [movies, setMovies] = useState<MovieTmdb[]>([]);
  const [tvShows, setTvShows] = useState<TvTmdb[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieTmdb[]>([]);
  const [popularTvShows, setPopularTvShows] = useState<TvTmdb[]>([]);

  useEffect(() => {
    searchMovies("");
  });

  const searchMovies = (query: string) => {
    tmdbApi
      .get("search/movie", { params: { query } })
      .then((response) => {
        const movieData: MovieTmdb[] = response.data.results;
        setMovies(movieData);
      })
      .catch((error) => {
        console.error("Error when search movies: ", error);
      });
  };

  const searchTvShows = (query: string) => {
    tmdbApi
      .get("search/tv", { params: { query } })
      .then((response) => {
        const tvShowData: TvTmdb[] = response.data.results;
        setTvShows(tvShowData);
      })
      .catch((error) => {
        console.error("Error when search for Tv Shows: ", error);
      });
  };

  const searchPopularMovies = () => {
    tmdbApi
      .get("movie/popular")
      .then((response) => {
        const popularMovieData: MovieTmdb[] = response.data.results;
        setPopularMovies(popularMovieData);
      })
      .catch((error) => {
        console.error("Error when search popular movies: ", error);
      });
  };

  const searchPopularTvShows = () => {
    tmdbApi
      .get("tv/popular")
      .then((response) => {
        const popularTvShowData: TvTmdb[] = response.data.results;
        setPopularTvShows(popularTvShowData);
      })
      .catch((error) => {
        console.error("Error when search for popular tv shows: ", error);
      });
  };

  return (
    <TmdbContext.Provider
      value={{
        searchMovies,
        searchTvShows,
        searchPopularMovies,
        searchPopularTvShows,
        movies,
        tvShows,
        popularMovies,
        popularTvShows,
      }}
    >
      {props.children}
    </TmdbContext.Provider>
  );
};

export const useTmdb = (): TmdbContextType => React.useContext(TmdbContext);
