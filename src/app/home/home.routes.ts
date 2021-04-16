import { RouteRecordRaw } from "vue-router";

const homeRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "./home.component"),
  },
];

export default homeRoutes;
