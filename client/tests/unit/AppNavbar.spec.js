import Vuex from "vuex";
import AppNavbar from "@/components/AppNavbar.vue";
import { createLocalVue, shallowMount } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  TOGGLE_LOGIN_FORM: jest.fn(),
};

const store = new Vuex.Store({ mutations });

describe("AppNavbar.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AppNavbar, {
      store,
      localVue,
    });
  });

  it("should check if login button is visible", () => {
    expect(wrapper.find(".btn-login").exists()).toBe(true);
  });

  it("should commit to a mutation and send a payload", async () => {
    const loginButton = wrapper.find(".btn-login");
    await loginButton.trigger("click");
    expect(mutations.TOGGLE_LOGIN_FORM).toHaveBeenCalledWith(
      {},
      { msg: "Mutation payload" }
    );
  });
});
