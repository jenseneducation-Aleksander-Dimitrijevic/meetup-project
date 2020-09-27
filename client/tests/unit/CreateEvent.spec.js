import CreateEvent from "@/components/CreateEvent.vue";
import { shallowMount } from "@vue/test-utils";

describe("CreateEvent.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(CreateEvent);
  });

  afterEach(() => {
    wrapper.destroy();
  });
  test("should check if component exists", () => {
    expect(wrapper.findComponent(CreateEvent).exists()).toBe(true);
  });
});
