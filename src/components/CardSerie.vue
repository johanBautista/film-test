<template>
  <div class="serie-card">
    <div class="serie-card__front">
      <img
        :src="getSerieImageUrl(serie.poster_path)"
        :alt="serie?.title || 'Imagen no disponible'"
        class="serie-card__front--image"
      />
    </div>

    <div class="serie-card__back">
      <h3 class="serie-card__name">{{ serie.title }}</h3>
      <p class="serie-card__description">{{ serie.overview }}</p>
      <button class="serie-card__button">Ver más</button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Serie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

defineProps<{ serie: Serie }>();

const getSerieImageUrl = (posterPath: string | null) => {
  return posterPath ? `https://image.tmdb.org/t/p/w500/${posterPath}` : "";
};
</script>
<style scoped lang="scss">
.serie-card {
  // width: 300px;
  height: 400px;
  position: relative;
  perspective: 1000px;
}
.serie-card__front--image {
  width: 278px;
  height: 400px;
  object-fit: fill;
  border-radius: 10px;
}

.serie-card__front,
.serie-card__back {
  position: absolute;
  width: 280px;
  height: 400px;
  backface-visibility: hidden;
  border-radius: 10px;
  transition: transform 0.6s;
}
.serie-card__back {
  width: 245px;
  height: 367px;
}
.serie-card__front {
  background: #222;
}

.serie-card__back {
  background: #333;
  color: white;
  transform: rotateY(180deg);
  padding: 1rem;
}

.serie-card:hover .serie-card__front {
  transform: rotateY(180deg);
}

.serie-card:hover .serie-card__back {
  transform: rotateY(0deg);
}
</style>
