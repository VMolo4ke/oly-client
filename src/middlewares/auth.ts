import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export default function authMiddleware(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  const token = localStorage.getItem("jwt_token");
  const isAuthenticated = !!token;

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next("/auth");
  }

  if (to.meta.guestOnly && isAuthenticated) {
    return next("/");
  }

  next();
}
