<template>
  <div class="card">
    <div class="card__front">
      <img
        :src="getMovieImageUrl(movie.poster_path)"
        :alt="movie?.title || 'Imagen no disponible'"
        class="card__front--image"
      />
    </div>

    <div class="card__back">
      <div class="card__back-description">
        <h3 class="card__back-description-name">{{ movie.title }}</h3>
        <p class="card__back-description-overview">{{ movie.overview }}</p>
        <router-link
          :to="`/movie/${movie.id}`"
          class="card__back-description-button"
        >
          Go to film
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from "../utils/interfaces";

defineProps<{ movie: Movie }>();

const getMovieImageUrl = (posterPath: string | null) => {
  return posterPath ? `https://image.tmdb.org/t/p/w500/${posterPath}` : "";
};
</script>
<style scoped lang="scss">
@import "@/assets/styles/components/Card.scss";
</style>
