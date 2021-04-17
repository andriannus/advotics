import { defineComponent } from "vue";

import "./media.component.scss";

import { rupiahCurrency } from "@/app/shared/utils/currency";

export default defineComponent({
  name: "MediaComponent",

  props: {
    name: {
      type: String,
      default: null,
    },
    picture: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: 0,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    sold: {
      type: Number,
      default: 0,
    },
  },

  setup(props) {
    const mediaClassNames = [props.primary && "is-primary", "Media"];

    return (): JSX.Element => (
      <div class={mediaClassNames}>
        {props.picture && (
          <figure class="Media-left">
            <img src={props.picture} alt="Media Left" />
          </figure>
        )}

        <div class="Media-content">
          <p class="Media-title">{props.name}</p>

          <div class="Media-description">
            <span>{rupiahCurrency(props.price)}</span>
            <span>{props.sold}</span>
          </div>
        </div>
      </div>
    );
  },
});
