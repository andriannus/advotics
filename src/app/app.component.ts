import { defineComponent, Fragment, h, VNode } from "vue";
import { RouterLink, RouterView } from "vue-router";

import "./app.component.scss";

export default defineComponent({
  name: "App",

  render: (): VNode =>
    h(Fragment, null, [
      h(
        "div",
        {
          id: "nav",
        },
        [
          h(
            RouterLink,
            {
              to: "/",
            },
            () => "Home",
          ),
          h("span", " | "),
          h(
            RouterLink,
            {
              to: "/about",
            },
            () => "About",
          ),
        ],
      ),
      h(RouterView),
    ]),
});
