import { defineStore } from "pinia";
import { getSeries } from "../services/seriesService";

interface Serie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

interface SerieState {
  series: Serie[];
  loading: boolean;
  error: string | null;
  lastFetch: number;
}

export const useSeriesStore = defineStore("series", {
  state: (): SerieState => ({
    series: [],
    loading: false,
    error: null as string | null,
    lastFetch: 0,
  }),

  actions: {
    async fetchSeries() {
      const CACHE_TIME = 5 * 60 * 1000;
      const now = Date.now();

      if (this.series.length > 0) return;

      if (this.series.length > 0 && now - this.lastFetch < CACHE_TIME) {
        return;
      }

      this.loading = true;
      this.error = null;

      try {
        const series = await getSeries();
        this.series = series;
        this.lastFetch = now;
      } catch (err) {
        this.error = "Error loading series";
      } finally {
        this.loading = false;
      }
    },
  },
});
