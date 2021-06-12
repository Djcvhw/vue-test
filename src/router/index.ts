import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/exchanges/:id",
    name: "Exchange",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "exchange" */ "../views/Exchange.vue"),
  },
  {
    path: "/exchanges",
    name: "Exchanges",
    component: () =>
      import(/* webpackChunkName: "market" */ "../views/Exchanges.vue"),
  },
  {
    path: "/markets",
    name: "Markets",
    component: () =>
      import(/* webpackChunkName: "market" */ "../views/Markets.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
