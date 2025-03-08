import { defineStore } from "pinia";
import {
  getMovieById,
  getMovieCreditsId,
  getMovies,
  getMovieSimilarId,
} from "../services/moviesService";

interface Movie {
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

interface Credit {
  id: number;
  name: string;
  profile_path: string;
}

interface SimilarMovie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieState {
  movies: Movie[];
  movie: Movie | null;
  credits: Credit[];
  similarMovies: SimilarMovie[];
  loading: boolean;
  error: string | null;
  lastFetch: number;
}

export const useMoviesStore = defineStore("movies", {
  state: (): MovieState => ({
    movies: [],
    movie: null,
    credits: [],
    similarMovies: [],
    loading: false,
    error: null,
    lastFetch: 0,
  }),

  actions: {
    async fetchMovies() {
      const CACHE_TIME = 5 * 60 * 1000;
      const now = Date.now();

      if (this.movies.length > 0 && now - this.lastFetch < CACHE_TIME) {
        return;
      }

      this.loading = true;
      this.error = null;

      try {
        const movies = await getMovies();
        this.movies = movies;
        this.lastFetch = now;
      } catch (err) {
        this.error = "Error loading movies";
      } finally {
        this.loading = false;
      }
    },
    async fetchMovieById(id: number) {
      this.loading = true;
      this.error = null;

      try {
        const movie = await getMovieById(id);
        this.movie = movie;
      } catch (err) {
        this.error = `Error loading movie with id ${id}`;
      } finally {
        this.loading = false;
      }
    },
    async fetchMovieCreditsId(id: number) {
      this.loading = true;
      this.error = null;

      try {
        const credits = await getMovieCreditsId(id);
        this.credits = credits?.cast?.slice(0, 10);
      } catch (err) {
        this.error = `Error loading movie with id ${id}`;
      } finally {
        this.loading = false;
      }
    },
    async fetchSimilarMovies(id: number) {
      this.loading = true;
      this.error = null;

      try {
        const similarMovies = await getMovieSimilarId(id);
        this.similarMovies = similarMovies?.slice(0, 10);
      } catch (err) {
        this.error = `Error loading movie with id ${id}`;
      } finally {
        this.loading = false;
      }
    },
  },
});
