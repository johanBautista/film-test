<template>
  <section class="plans">
    <div class="plans__item" v-for="plan in plans" :key="plan.name">
      <h3 class="plans__title">{{ plan.name }}</h3>
      <p class="plans__price">{{ plan.price }}</p>
      <ul class="plans__list">
        <li
          v-for="feature in plan.features"
          :key="feature"
          class="plans__list-item"
        >
          {{ feature }}
        </li>
      </ul>
      <button class="plans__button">Subscribe</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { plansMock } from "../../utils/data.ts";

const plans = ref(plansMock);
</script>

<style scoped lang="scss">
@import "./HomeStyles.scss";
</style>
