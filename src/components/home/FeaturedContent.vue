<template>
  <section class="featured">
    <h2 class="featured__title">Discover new movies!</h2>

    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">{{ error }}</div>

    <div v-else class="featured__grid">
      <div
        class="featured__grid-trending"
        v-for="content in trendingMovies"
        :key="content.title"
      >
        <img
          :src="getMovieImageUrl(content.backdrop_path)"
          :alt="content.title"
          class="featured__image"
        />
      </div>
      <!--  -->
    </div>
    <div v-if="genres" class="featured__genres">
      <div class="featured__genres-grid">
        <div
          v-for="genre in genres"
          :key="genre.id"
          class="featured__genres-grid-pill"
        >
          {{ genre.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMoviesStore } from "../../store/moviesStore";
import { onMounted } from "vue";

const store = useMoviesStore();
const { genres, trendingMovies, loading, error } = storeToRefs(store);

const getMovieImageUrl = (path: string) =>
  path ? `https://image.tmdb.org/t/p/w500/${path}` : "/placeholder.jpg";

onMounted(() => {
  store.fetchTrendingMovies();
  store.fetchMoviesGenres();
});
</script>

<style scoped lang="scss">
@import "./HomeStyles.scss";
</style>
