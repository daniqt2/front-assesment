import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import { ERoutes } from "./router.utils";
import { useUserStore } from "../store/user.store";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: ERoutes.WELCOME,
    component: () => import("../pages/Welcome.page.vue"),
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
    meta: { requiresAuth: true },
  },
  {
    path: "/restaurantList",
    name: ERoutes.RESTAURANT_LIST,
    component: () => import("../pages/RestaurantsList.page.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/restaurant/:id",
    name: ERoutes.RESTAURANT_DETAIL,
    component: () => import("../pages/RestaurantDetail.page.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/restaurant/create",
    name: ERoutes.RESTAURANT_CREATE,
    component: () => import("../pages/CreateRestaurant.page.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// TODO - CHECK NAV ERROR
router.onError((error, to) => {
  if (
    error.message.includes("Failed to fetch dynamically imported module") ||
    error.message.includes("Importing a module script failed")
  ) {
    window.location = to.fullPath;
  }
});

router.beforeEach((to, from, next) => {
  const { userName } = useUserStore();

  if (to.name == ERoutes.LOGIN && userName) {
    next({ name: ERoutes.RESTAURANT_LIST });
  }

  if (to.meta.requiresAuth && !userName) {
    next({ name: ERoutes.LOGIN });
  } else {
    next();
  }
});

export default router;
