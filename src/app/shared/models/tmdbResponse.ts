export interface ResponseTmdbApi {
    page: number,
    results: ResponseBaseInfo[],
    total_pages: number,
    total_results: number,
}

export interface ResponseBaseInfo {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<number>,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}
export interface ResponseMovieTmdb extends ResponseBaseInfo {}



export interface ResponseTvTmdb extends ResponseBaseInfo {
    first_air_date: string,
}