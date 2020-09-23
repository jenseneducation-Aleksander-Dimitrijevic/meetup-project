<template>
  <div>
    <Backdrop />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import Backdrop from "@/components/Backdrop.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppFooter,
    Backdrop,
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>