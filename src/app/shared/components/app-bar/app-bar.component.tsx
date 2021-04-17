import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

import "./app-bar.component.scss";

import LogoutIcon from "@/app/shared/assets/icons/logout.png";
import ProfileIcon from "@/app/shared/assets/icons/profile.svg";

export default defineComponent({
  name: "AppBarComponent",

  setup() {
    return (): JSX.Element => (
      <div class="TopBar">
        <picture class="TopBar-logo">
          <source srcset="/images/webp/logo.webp" type="image/webp" />
          <img src="/images/jpeg/logo.jpeg" alt="Advotics" />
        </picture>

        <div class="AppBar-powered">
          <span>powered by &nbsp;</span>

          <picture>
            <source srcset="/images/webp/logo.webp" type="image/webp" />
            <img src="/images/jpeg/logo.jpeg" alt="Advotics" />
          </picture>
        </div>

        <div class="TopBar-actions">
          <div class="TopBar-action AppBar-user">
            <span class="AppBar-title">Username</span>
            <span class="AppBar-subtitle">Company Name</span>
          </div>

          <RouterLink class="TopBar-action" to="/dashboard">
            <img src={ProfileIcon} alt="Profile" />
          </RouterLink>

          <RouterLink class="TopBar-action Icon" to="/dashboard">
            <img src={LogoutIcon} alt="Logout" />
          </RouterLink>
        </div>
      </div>
    );
  },
});
