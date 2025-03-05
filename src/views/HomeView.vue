<template>
  <div class="home">
    <HeroSection />
    <FeaturedContent />
    <SubscriptionPlans />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "../components/home/HeroSection.vue";
import SubscriptionPlans from "../components/home/SubscriptionPlans.vue";
import FeaturedContent from "../components/home/FeaturedContent.vue";
</script>

<style scoped>
@import "@/assets/styles/home.scss";
</style>
