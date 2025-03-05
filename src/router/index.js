import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/movies",
      name: "movies",
      component: () => import("../views/MoviesView.vue"),
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: () => import("../views/MovieIdView.vue"),
    },
    {
      path: "/series",
      name: "series",
      component: () => import("../views/SeriesView.vue"),
    },
    {
      path: "/serie/:id",
      name: "serie",
      component: () => import("../views/SerieIdView.vue"),
    },
  ],
});

export default router;
