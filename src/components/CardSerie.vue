<template>
  <div class="card">
    <div class="card__front">
      <img
        :src="getSerieImageUrl(serie.poster_path)"
        :alt="serie?.title || 'Imagen no disponible'"
        class="card__front--image"
      />
    </div>

    <div class="card__back">
      <div class="card__back-description">
        <h3 class="card__back-description-name">{{ serie.name }}</h3>
        <p class="card__back-description-overview">{{ serie.overview }}</p>
        <router-link to="/" class="card__back-description-button"
          >Go to website</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Serie } from "../utils/interfaces";

defineProps<{ serie: Serie }>();

const getSerieImageUrl = (posterPath: string | null) => {
  return posterPath ? `https://image.tmdb.org/t/p/w500/${posterPath}` : "";
};
</script>
<style scoped lang="scss">
@import "@/assets/styles/components/Card.scss";
</style>
