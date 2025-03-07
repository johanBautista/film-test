import { defineStore } from "pinia";
import {
  getMovieById,
  getMovieCreditsId,
  getMovies,
  getMoviesGenres,
  getMovieSimilarId,
  getTrendingMovies,
} from "../services/moviesService";
import type { MovieState } from "../utils/interfaces";

export const useMoviesStore = defineStore("movies", {
  state: (): MovieState => ({
    movies: [],
    movie: null,
    credits: [],
    similarMovies: [],
    trendingMovies: [],
    genres: [],
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
    async fetchMoviesGenres() {
      this.loading = true;
      this.error = null;

      try {
        const genres = await getMoviesGenres();
        this.genres = genres;
      } catch (err) {
        this.error = "Error loading genres";
      } finally {
        this.loading = false;
      }
    },
    async fetchTrendingMovies() {
      this.loading = true;
      this.error = null;

      try {
        const trendingMovies = await getTrendingMovies();
        this.trendingMovies = trendingMovies;
      } catch (err) {
        this.error = "Error loading movies";
      } finally {
        this.loading = false;
      }
    },
  },
});
