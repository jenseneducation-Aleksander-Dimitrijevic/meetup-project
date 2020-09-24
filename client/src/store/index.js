import Vue from "vue";
import Vuex from "vuex";
import router from "@/router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isBackdropOpen: false,
    isLoginFormOpen: false,
  },
  mutations: {
    TOGGLE_BACKDROP(state) {
      state.isBackdropOpen = !state.isBackdropOpen;
    },
    DISABLE_BACKDROP(state) {
      state.isBackdropOpen = false;
      router.push({ name: "Home" });
    },
    TOGGLE_LOGIN_FORM(state) {
      state.isLoginFormOpen = !state.isLoginFormOpen;
    },
  },
  actions: {},
  modules: {},
});
