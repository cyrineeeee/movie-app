export interface Movie {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

export interface MovieResponse {
  results: Movie[];
}