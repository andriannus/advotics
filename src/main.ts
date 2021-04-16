import { createApp } from "vue";

import { App, router } from "@/app";
import { store } from "@/app/store";

import "./register-service-worker";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
