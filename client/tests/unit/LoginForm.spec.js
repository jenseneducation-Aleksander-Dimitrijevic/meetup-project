import Vuex from "vuex";
import LoginForm from "@/components/LoginForm.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoginFormOpen: false,
  },
});

describe("LoginForm.vue", () => {
  let wrapper;
  let inputEmail;
  beforeEach(() => {
    wrapper = shallowMount(LoginForm, {
      store,
      localVue,
      data() {
        return {
          input: {
            email: "aleksander@gmail.com",
          },
          isLoggedIn: false,
        };
      },
    });
    inputEmail = wrapper.find("#email");
  });

  test("should check if login form exist", () => {
    expect(wrapper.find("form").exists()).toBe(true);
  });

  test("should return value inserted in input", () => {
    inputEmail.setValue("aleksander@gmail.com");
    expect(inputEmail.element.value).toBe("aleksander@gmail.com");
  });

  test("should check if input value is stored in data property", async () => {
    inputEmail.setValue("aleksander@gmail.com");
    expect(wrapper.vm.input.email).toBe("aleksander@gmail.com");
  });

  test("should check if input is empty and display error message", async () => {
    await wrapper.trigger("submit");
    expect(wrapper.vm.error).toBe("Form field(s) empty");
  });

  test("should check if user has submitted the form", async () => {
    await wrapper.trigger("submit");
    wrapper.setData({
      isLoggedIn: true,
    });
    expect(wrapper.vm.isLoggedIn).toBe(true);
  });
});
