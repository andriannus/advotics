import { RouteRecordRaw } from "vue-router";

const aboutRoutes: RouteRecordRaw[] = [
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "./about.component"),
  },
];

export default aboutRoutes;
