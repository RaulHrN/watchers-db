import {
  ResponseBaseInfo,
  ResponseMovieTmdb,
  ResponseTmdbApi,
  ResponseTvTmdb,
} from "./tmdbResponse";

export interface TmdbApi extends ResponseTmdbApi {}

export interface BaseInfoTmdb extends ResponseBaseInfo {}

export interface MovieTmdb extends ResponseMovieTmdb {}

export interface TvTmdb extends ResponseTvTmdb {}
