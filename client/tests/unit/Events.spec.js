import Events from "@/components/Events.vue";
import { shallowMount } from "@vue/test-utils";

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: [{}] }),
}));

describe("Events.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Events);
  });

  it("mocking the axios call to get the first event in the response", () => {
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.events.length).toBe(1);
    });
  });
});
