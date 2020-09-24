<template>
  <div>
    <Backdrop />
    <app-navbar />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import Backdrop from "@/components/Backdrop.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppNavbar from "@/components/AppNavbar.vue";
export default {
  name: "App",
  components: {
    AppFooter,
    Backdrop,
    AppNavbar,
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
