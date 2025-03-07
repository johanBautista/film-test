<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__top">
        <h2 class="footer__title">4FRAME</h2>
        <nav class="footer__nav">
          <a href="#" class="footer__nav-item">For You</a>
          <a href="#" class="footer__nav-item">Movies</a>
          <a href="#" class="footer__nav-item">TV Shows</a>
          <a href="#" class="footer__nav-item">Favorites</a>
          <a href="#" class="footer__nav-item">My List</a>
          <a href="#" class="footer__nav-item">User Settings</a>
        </nav>
        <div class="footer__social">
          <a href="#" class="footer__social-item">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a href="#" class="footer__social-item">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a href="#" class="footer__social-item">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a href="#" class="footer__social-item">
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>
          <a
            href="https://www.linkedin.com/in/johanbautista/"
            class="footer__social-item"
            target="_blank"
          >
            <font-awesome-icon icon="coffee" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@import "./styles.scss";
</style>
