import Vue from "vue";
import Vuex from "vuex";
import router from "@/router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eventList: [],
    eventReviews: [],
    isLoading: false,
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
    SET_LOADING(state) {
      state.isLoading = !state.isLoading;
    },
    SET_EVENT_DATA(state, event) {
      const eventExists = state.eventList.some((item) => item.id === event.id);
      if (eventExists) {
        state.eventList = state.eventList.filter((e) => e.id !== event.id);
      } else {
        state.eventList.push(event);
      }
    },
    SET_EVENT_REVIEW(state, eventReview) {
      state.eventReviews.push(eventReview);
      console.log(state.eventReviews);
    },
  },
  actions: {},
  modules: {},
  getters: {
    loggedIn() {
      const isLoggedIn = JSON.parse(localStorage.getItem("user"));
      return !!isLoggedIn;
    },

    showCurrentReview: (state) => (id) => {
      return state.eventReviews.filter((review) => review.id == id);
    },
  },
});
