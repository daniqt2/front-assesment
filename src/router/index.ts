import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useUserStore } from "../store/user.store";
import { ERoutes } from "./router.utils";

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
    path: "/restaurant",
    name: ERoutes.RESTAURANT_DETAIL,
    component: () => import("../pages/RestaurantDetail.page.vue"),
  },
  // {
  //   path: '/protected',
  //   name: 'Protected',
  //   component: Protected,
  //   meta: { requiresAuth: true },
  // },
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
