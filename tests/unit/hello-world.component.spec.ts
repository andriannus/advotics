import { shallowMount } from "@vue/test-utils";

import HelloWorld from "@/app/shared/components/hello-world/hello-world.component.vue";

describe("hello-world.component.vue", () => {
  it("should render props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });

    expect(wrapper.text()).toMatch(msg);
  });
});
