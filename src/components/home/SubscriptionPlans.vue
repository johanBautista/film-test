<template>
  <section class="plans">
    <h2 class="plans__title">Elige tu plan</h2>
    <div class="plans__list">
      <div class="plans__item" v-for="plan in plans" :key="plan.name">
        <h3 class="plans__name">{{ plan.name }}</h3>
        <p class="plans__price">{{ plan.price }}</p>
        <button class="plans__button">Suscribirse</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const plans = [
  { name: "Básico", price: "$5.99/mes" },
  { name: "Estándar", price: "$9.99/mes" },
  { name: "Premium", price: "$14.99/mes" },
];
</script>

<style scoped lang="scss">
@import "./HomeStyles.scss";
</style>
