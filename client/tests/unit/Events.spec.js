import Events from "@/components/Events.vue";
import { shallowMount } from "@vue/test-utils";

describe("Events.vue", () => {
  const wrapper = shallowMount(Events);
  test("Should check if current location is Stockholm", () => {
    expect(wrapper.vm.location.name).toBe("Stockholm");
  });
});
