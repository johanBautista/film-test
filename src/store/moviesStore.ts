import { defineStore } from "pinia";
import { getMovies } from "../services/moviesService";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

export const useMoviesStore = defineStore("movies", {
  state: (): MovieState => ({
    movies: [],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchMovies() {
      this.loading = true;
      this.error = null;
      try {
        this.movies = await getMovies();
        console.log("store", this.movies);
      } catch (err) {
        this.error = "Error loading movies";
      } finally {
        this.loading = false;
      }
    },
  },
});
