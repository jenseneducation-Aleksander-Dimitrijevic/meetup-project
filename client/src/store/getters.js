export const getters = {
  loggedIn() {
    const isLoggedIn = JSON.parse(localStorage.getItem("user"));
    return !!isLoggedIn;
  },

  showCurrentReview: (state) => (id) => {
    return state.eventReviews.filter((review) => review.id == id);
  },
};
