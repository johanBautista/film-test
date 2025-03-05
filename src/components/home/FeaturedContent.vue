<template>
  <section class="featured">
    <h2 class="featured__title">Destacados</h2>
    <div class="featured__grid">
      <div
        class="featured__item"
        v-for="content in featured"
        :key="content.title"
      >
        <img
          :src="content.image"
          :alt="content.title"
          class="featured__image"
        />
        <p class="featured__name">{{ content.title }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const featured = [
  { title: "Serie A", image: "/series1.jpg" },
  { title: "Película B", image: "/movie1.jpg" },
  { title: "Serie C", image: "/series2.jpg" },
];
</script>

<style scoped lang="scss">
@import "./HomeStyles.scss";
</style>
