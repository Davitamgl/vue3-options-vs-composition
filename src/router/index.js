import { createRouter, createWebHistory } from "vue-router";
import Options from "../views/OptionsApi.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Options",
      component: Options,
    },
    {
      path: "/composition",
      name: "Composition",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CompositionApi.vue"),
    },
  ],
});

export default router;
