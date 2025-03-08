export interface Comment {
  id: number;
  text: string;
  userName: string;
}

export interface Plan {
  features: string[];
  name: string;
  price: string;
}

export interface Movie {
  id: number;
  backdrop_path: string;
  comments: string;
  homepage: string;
  genres: { id: number; name: string }[];
  overview: string;
  poster_path: string;
  popularity: number;
  tagline: string;
  title: string;
  vote_count: number;
}

export interface Serie {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  title: string;
}

export interface Credit {
  id: number;
  name: string;
  profile_path: string;
}

export interface SimilarMovie {
  id: number;
  poster_path: string;
  title: string;
}

export interface Genres {
  id: number;
  name: string;
}
// -------------------------------------------------stores-----
// ------------------------------------------------------------
export interface MovieState {
  movies: Movie[];
  movie: Movie | null;
  credits: Credit[];
  similarMovies: SimilarMovie[];
  trendingMovies: Movie[];
  genres: Genres[];
  loading: boolean;
  error: string | null;
  lastFetch: number;
}

export interface SerieState {
  series: Serie[];
  loading: boolean;
  error: string | null;
  lastFetch: number;
}
