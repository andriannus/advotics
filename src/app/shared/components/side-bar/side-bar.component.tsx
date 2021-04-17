import { defineComponent } from "vue";

import "./side-bar.component.scss";

import ChartIcon from "@/app/shared/assets/icons/chart.svg";
import MenuIcon from "@/app/shared/assets/icons/menu.jpeg";

export default defineComponent({
  name: "SideBarComponent",

  setup() {
    return (): JSX.Element => (
      <nav class="SideBar">
        <ul class="SideBar-list is-static">
          <li class="SideBar-listItem">
            <img src={MenuIcon} alt="Menu" />
          </li>
        </ul>

        <ul class="SideBar-list is-active">
          <li class="SideBar-listItem">
            <img src={ChartIcon} alt="Chart" />
          </li>
        </ul>
      </nav>
    );
  },
});
