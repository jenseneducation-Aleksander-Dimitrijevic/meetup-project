import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/event/:id",
        name: "event",
        props: true,
        component: () => import("@/views/Event.vue"),
      },
      {
        path: "/create",
        name: "createEvent",
        component: () => import("@/views/CreateEvent.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
