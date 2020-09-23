<template>
  <div>
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppFooter,
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>