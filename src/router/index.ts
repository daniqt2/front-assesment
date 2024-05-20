import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import { ERoutes } from "./router.utils";
import { useUserStore } from "../store/user.store";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: ERoutes.WELCOME,
    component: () => import("../pages/Welcome.page.vue"),
    // meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: ERoutes.LOGIN,
    component: () => import("../pages/Login.page.vue"),
  },
  {
    path: "/register",
    name: ERoutes.REGISTER,
    component: () => import("../pages/Register.page.vue"),
  },
  {
    path: "/mapView",
    name: ERoutes.MAP_VIEW,
    component: () => import("../pages/Map.page.vue"),
  },
  {
    path: "/restaurant",
    name: ERoutes.RESTAURANT_DETAIL,
    component: () => import("../pages/RestaurantDetail.page.vue"),
    // meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next({ name: ERoutes.LOGIN });
  } else {
    next();
  }
});

export default router;
