import Events from "@/components/Events.vue";
import { shallowMount } from "@vue/test-utils";

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: [{ val: 1 }] }),
}));

describe("Events.vue", () => {
  it("mocking the axios call to get the first event in the response", () => {
    var wrapper = shallowMount(Events);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.events.length).toBe(1);
    });
  });
});
