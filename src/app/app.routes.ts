import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import aboutRoutes from "./about/about.routes";
import dashboardRoutes from "./dashboard/dashboard.routes";
import homeRoutes from "./home/home.routes";

const routes: RouteRecordRaw[] = [
  ...aboutRoutes,
  ...dashboardRoutes,
  ...homeRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
