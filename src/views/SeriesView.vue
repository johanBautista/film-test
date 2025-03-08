<template>
  <section class="list">
    <h2 class="list-title">Most famous series</h2>

    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">{{ error }}</div>

    <div v-else class="list-grid">
      <CardSerie v-for="serie in series" :key="serie.id" :serie="serie" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import CardSerie from "../components/CardSerie.vue";
import { useSeriesStore } from "../store/seriesStore";

const store = useSeriesStore();
const { series, loading, error } = storeToRefs(store);

onMounted(() => {
  store.fetchSeries();
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/List.scss";
</style>
