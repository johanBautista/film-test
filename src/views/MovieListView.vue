<template>
  <section class="list">
    <h2 class="list-title">Popular films</h2>

    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">{{ error }}</div>

    <div v-else class="list-grid">
      <Card v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useMoviesStore } from "../store/moviesStore";
import { storeToRefs } from "pinia";
import Card from "../components/CardMovie.vue";

const store = useMoviesStore();
const { movies, loading, error } = storeToRefs(store);

onMounted(() => {
  store.fetchMovies();
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/List.scss";
</style>
