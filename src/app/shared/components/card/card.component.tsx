import { defineComponent } from "vue";

import "./card.component.scss";

import MoreIcon from "@/app/shared/assets/icons/more.svg";

export default defineComponent({
  name: "CardComponent",

  props: {
    elevated: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { slots }) {
    const hasTitle = !!slots.title;
    const cardClassNames = [props.elevated && "Card--elevated", "Card"];

    return (): JSX.Element => (
      <div class={cardClassNames}>
        {hasTitle && (
          <div class="Card-title">
            {slots.title?.()}

            <div class="Icon">
              <img src={MoreIcon} alt="More" />
            </div>
          </div>
        )}

        <div class="Card-body">{slots.default?.()}</div>
      </div>
    );
  },
});
