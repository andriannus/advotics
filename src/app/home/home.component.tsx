import { defineComponent } from "vue";

import Logo from "@/app/shared/assets/images/logo.png";
import HelloWorld from "@/app/shared/components/hello-world/hello-world.component.vue";

export default defineComponent({
  name: "Home",

  render: (): JSX.Element => (
    <div class="home">
      <img alt="Vue logo" src={Logo} />
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
  ),
});
