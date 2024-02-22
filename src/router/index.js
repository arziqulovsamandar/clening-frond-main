import { createRouter, createWebHistory } from "vue-router";
import nProgress from "nprogress";
import home from "./home";
import admin from "./admin";
import auth from "./auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    home,
    admin,
    auth,
    {
      path: "/socket",
      name: "socket",

      component: () => import("@/components/MyForm.vue"),
    },
  ],
});

router.beforeResolve((to, from, next) => {
  nProgress.start();
  return next();
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (!token && to.meta.requiresAdminRole) return next({ path: "/" });
  else if (token && to.path == "/login") return next({ path: "/admin" });

  return next();
});

router.afterEach(() => {
  nProgress.done();
});

export default router;
