import router from "@/router/index";
export const mutations = {
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
  },
};
