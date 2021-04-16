import { defineComponent } from "vue";

export default defineComponent({
  name: "About",

  render: (): JSX.Element => (
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  ),
});
