import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LipsumView from "../views/LipsumView.vue";
import FluidTypeView from "../views/FluidTypeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/lipsum",
      name: "lipsum",
      component: LipsumView,
    },
    {
      path: "/fluid-type-scale",
      name: "fluid-type-scale",
      component: FluidTypeView,
    },
    // {
    //   path: "/lipsum",
    //   name: "Lorem Ipsum",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/LipsumView.vue"),
    // },
  ],
});

export default router;
