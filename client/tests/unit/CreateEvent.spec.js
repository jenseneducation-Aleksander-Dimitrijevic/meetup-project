import CreateEvent from "@/views/CreateEvent.vue";
import { shallowMount } from "@vue/test-utils";

describe("CreateEvent.vue", () => {
  let wrapper;
  let titleInput;
  beforeEach(() => {
    wrapper = shallowMount(CreateEvent);
    titleInput = wrapper.find("#title");
  });

  afterEach(() => {
    wrapper.destroy();
  });
  test("should check if component exists", () => {
    expect(wrapper.findComponent(CreateEvent).exists()).toBe(true);
  });

  test("Should return event title from text input", async () => {
    await titleInput.setValue("My new event");
    const expectValue = titleInput.element.value;
    expect(titleInput.element.value).toBe(expectValue);
  });

  test("Should return data property with bound title data", async () => {
    await titleInput.setValue("My new event");
    expect(wrapper.vm.input.title).toBe(titleInput.element.value);
  });
});
