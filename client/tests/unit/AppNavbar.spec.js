import Vuex from "vuex";
import AppNavbar from "@/components/AppNavbar.vue";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import { mutations } from "@/store/mutations";

const localVue = createLocalVue();
localVue.use(Vuex);

const getters = {
  loggedIn: jest.fn(),
};

const store = new Vuex.Store({ getters });

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

  it("should commit to a mutation and change state", () => {
    const { TOGGLE_LOGIN_FORM } = mutations;
    const state = { isLoginFormOpen: false };
    TOGGLE_LOGIN_FORM(state);
    expect(state.isLoginFormOpen).toBe(true);
  });
});
