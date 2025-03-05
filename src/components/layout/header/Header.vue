<template>
  <header class="header">
    <div class="header__logo-nav">
      <h1 class="header__logo">4FRAME</h1>
      <nav class="header__nav">
        <router-link class="header__nav-item" to="/"> FOR YOU </router-link>
        <router-link class="header__nav-item" to="/movies">
          MOVIES
        </router-link>
        <router-link class="header__nav-item" to="/series">
          TV SHOWS
        </router-link>
      </nav>
    </div>

    <div class="header__search-container">
      <input type="search" placeholder="Search" class="header__search-input" />
      <span class="header__search-icon">
        <SearchIcon class="h-4 w-4 text-gray-400" />
      </span>
    </div>

    <div class="header__user-actions">
      <router-link class="header__nav-item" to="/">FAVORITES</router-link>
      <router-link class="header__nav-item" to="/">MY LIST</router-link>
      <div class="header__user-icon">
        <font-awesome-icon icon="user" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
