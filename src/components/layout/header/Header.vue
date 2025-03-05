<template>
  <header class="header">
    <div class="header__logo-nav">
      <h1 class="header__logo">4FRAME</h1>
      <nav class="header__nav">
        <a href="#" class="header__nav-item">FOR YOU</a>
        <a href="#" class="header__nav-item">MOVIES</a>
        <a href="#" class="header__nav-item">TV SHOWS</a>
      </nav>
    </div>

    <div class="header__search-container">
      <input type="search" placeholder="Search" class="header__search-input" />
      <span class="header__search-icon">
        <SearchIcon class="h-4 w-4 text-gray-400" />
      </span>
    </div>

    <div class="header__user-actions">
      <a href="#" class="header__user-actions-item">FAVORITES</a>
      <a href="#" class="header__user-actions-item">MY LIST</a>
      <div class="header__user-icon">
        <font-awesome-icon icon="user" />
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@import "./styles.scss";
</style>
