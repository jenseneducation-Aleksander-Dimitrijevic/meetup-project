import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const moment = require("moment");
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo);
Vue.use(require("vue-moment"), {
  moment,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    const events = localStorage.getItem("events");
    const reviews = localStorage.getItem("reviews");
    const isLoggedIn = localStorage.getItem("user");
    if (isLoggedIn) {
      store.commit("SET_EVENTS", JSON.parse(events));
      store.commit("SET_REVIEWS", JSON.parse(reviews));
      store.commit("SET_USER_DATA", JSON.parse(isLoggedIn));
    }
  },
  render: (h) => h(App),
}).$mount("#app");
