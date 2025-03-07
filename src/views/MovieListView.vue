<template>
  <section class="movie-list">
    <h2 class="movie-list__title">Películas Populares</h2>

    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">{{ error }}</div>

    <div v-else class="movie-list__grid">
      <Card v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useMoviesStore } from "../store/moviesStore";
import { storeToRefs } from "pinia";
import Card from "../components/Card.vue";

const store = useMoviesStore();
const { movies, loading, error } = storeToRefs(store);

onMounted(() => {
  store.fetchMovies();
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/List.scss";
</style>
