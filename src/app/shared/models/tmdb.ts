import {
  ResponseMovieTmdb,
  ResponseTmdbApi,
  ResponseTvTmdb,
} from "./tmdbResponse";

export interface TmdbApi extends ResponseTmdbApi {}

export interface MovieTmdb extends ResponseMovieTmdb {}

export interface TvTmdb extends ResponseTvTmdb {}
