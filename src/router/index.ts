import { createRouter, createWebHistory } from "vue-router";
import AuthView from "../views/AuthView.vue";
import HomeView from "../views/HomeView.vue";
import authMiddleware from "../middlewares/auth.ts";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/auth", component: AuthView, meta: { guestOnly: true } },
    { path: "/", component: HomeView, meta: { requiresAuth: true } },
  ],
});

router.beforeEach(authMiddleware);

export default router;
