import { defineComponent } from "vue";
import { RouterView } from "vue-router";

import "./app.component.scss";

import { AdvAppBar } from "@/app/shared/components/app-bar";
import { AdvSideBar } from "@/app/shared/components/side-bar";

export default defineComponent({
  name: "App",

  setup() {
    return (): JSX.Element => (
      <>
        <AdvAppBar />
        <AdvSideBar />

        <main class="App">
          <RouterView />
        </main>
      </>
    );
  },
});
