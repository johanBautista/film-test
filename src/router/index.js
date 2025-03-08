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
      component: () => import("../views/MovieListView.vue"),
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: () => import("../views/MovieIdView.vue"),
      props: true,
    },
    {
      path: "/series",
      name: "series",
      component: () => import("../views/SeriesView.vue"),
    },
  ],
});

export default router;
