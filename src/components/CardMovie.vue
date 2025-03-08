<template>
  <div class="movie-card">
    <div class="movie-card__front">
      <img
        :src="getMovieImageUrl(movie.poster_path)"
        :alt="movie?.title || 'Imagen no disponible'"
        class="movie-card__front--image"
      />
    </div>

    <div class="movie-card__back">
      <h3 class="movie-card__name">{{ movie.title }}</h3>
      <p class="movie-card__description">{{ movie.overview }}</p>
      <router-link :to="`/movie/${movie.id}`" class="movie-card__button">
        Ver más
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

defineProps<{ movie: Movie }>();

const getMovieImageUrl = (posterPath: string | null) => {
  return posterPath ? `https://image.tmdb.org/t/p/w500/${posterPath}` : "";
};
</script>
<style scoped lang="scss">
.movie-card {
  // width: 300px;
  height: 400px;
  position: relative;
  perspective: 1000px;
}
.movie-card__front--image {
  width: 278px;
  height: 400px;
  object-fit: fill;
  border-radius: 10px;
}

.movie-card__front,
.movie-card__back {
  position: absolute;
  width: 280px;
  height: 400px;
  backface-visibility: hidden;
  border-radius: 10px;
  transition: transform 0.6s;
}
.movie-card__back {
  width: 245px;
  height: 367px;
}
.movie-card__front {
  background: #222;
}

.movie-card__back {
  background: #333;
  color: white;
  transform: rotateY(180deg);
  padding: 1rem;
}

.movie-card:hover .movie-card__front {
  transform: rotateY(180deg);
}

.movie-card:hover .movie-card__back {
  transform: rotateY(0deg);
}
</style>
