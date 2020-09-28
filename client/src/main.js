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
  render: (h) => h(App),
}).$mount("#app");
