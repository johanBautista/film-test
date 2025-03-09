<template>
  <div v-if="loading">Cargando...</div>
  <div v-else-if="error">{{ error }}</div>

  <div v-else-if="movie">
    <div class="page">
      <aside class="page-sidebar">
        <h1 class="page-sidebar__title-mobile">{{ movie.title }}</h1>
        <div>
          <img
            :src="getMovieImageUrl(movie.poster_path)"
            :alt="movie.title"
            class="page-sidebar__poster"
          />
        </div>
        <div class="page-sidebar__description">
          <p>{{ movie.overview }}</p>
        </div>

        <hr class="page-sidebar__separator" />
        <h3 class="page-sidebar__title-section">IMDB</h3>

        <div class="page-sidebar__rating">
          <font-awesome-icon :icon="['fas', 'star']" class="icon" />
          <span>{{ movie.popularity }}</span>
        </div>

        <hr class="page-sidebar__separator" />
        <h3 class="page-sidebar__title-section">User reviewers</h3>

        <div class="pagesidebar__comments">
          <div
            v-for="comment in comments"
            :key="comment.id"
            class="page-sidebar__comments-item"
          >
            <div class="page-sidebar__comments-item-image">
              <font-awesome-icon icon="user" />
            </div>
            <p class="page-sidebar__comment-text">{{ comment.text }}</p>
          </div>
        </div>
      </aside>

      <main class="page-content">
        <div class="page-content__header">
          <h1 class="page-content__header-title">{{ movie.title }}</h1>
          <div>
            <font-awesome-icon :icon="['fas', 'heart']" />
            <span> / {{ movie.vote_count }}</span>
          </div>
        </div>
        <div class="page-content__scene">
          <img
            :src="getMovieImageUrl(movie.backdrop_path)"
            :alt="movie.title"
          />
        </div>
        <div class="page-content__details">
          <h3 class="page-content__chapter-title">{{ movie.tagline }}</h3>
          <a
            :href="movie.homepage"
            class="page-content__chapter-link"
            target="_blank"
            >Go to movie</a
          >
          <p class="page-content__chapter-description">
            {{ movie.overview }}
          </p>
        </div>
        <div class="page-content__genres">
          <div
            v-for="genre in movie.genres"
            :key="genre.id"
            class="page-content__genres-pill"
          >
            {{ genre.name }}
          </div>
        </div>
        <!--  -->
        <hr class="page-content__separator" />
        <h3 class="page-content__title-section">Cast</h3>

        <div class="page-content__actors">
          <div
            class="page-content__actors-item"
            v-for="actor in credits"
            :key="actor.id"
          >
            <img
              :src="getMovieImageUrl(actor.profile_path)"
              :alt="actor.name"
            />
            <div class="page-content__actors-item-overlay">
              <p class="page-content__actors-item-name">{{ actor.name }}</p>
            </div>
          </div>
        </div>
        <!--  -->
        <hr class="page-content__separator" />
        <h3 class="page-content__title-section">Related movies</h3>

        <div class="page-content__movies">
          <div
            class="page-content__movies-item"
            v-for="similar in similarMovies"
            :key="similar.id"
          >
            <img
              :src="getMovieImageUrl(similar.poster_path)"
              :alt="similar.title"
            />
            <div class="page-content__actors-item-overlay">
              <p class="page-content__actors-item-name">{{ similar.title }}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useMoviesStore } from "../store/moviesStore";
import { storeToRefs } from "pinia";
import { commentsMock } from "../utils/data.ts";

const route = useRoute();
const movieId = route.params.id;

const store = useMoviesStore();
const { movie, credits, similarMovies, loading, error } = storeToRefs(store);

const getMovieImageUrl = (path: string) =>
  path ? `https://image.tmdb.org/t/p/w500/${path}` : "/placeholder.jpg";

const comments = ref(commentsMock);

onMounted(async () => {
  store.fetchMovieById(Number(movieId));
  store.fetchMovieCreditsId(Number(movieId));
  store.fetchSimilarMovies(Number(movieId));
});
</script>

<style scoped lang="scss">
@import "../assets/styles/components/Details.scss";
</style>
