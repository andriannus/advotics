import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import dashboardRoutes from "./dashboard/dashboard.routes";

const routes: RouteRecordRaw[] = [...dashboardRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
