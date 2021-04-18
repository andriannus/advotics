import { RouteRecordRaw } from "vue-router";

const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "./dashboard.component.vue"),
  },
];

export default dashboardRoutes;
