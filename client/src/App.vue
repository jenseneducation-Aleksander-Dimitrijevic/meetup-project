<template>
  <div>
    <Backdrop />
    <login-form />
    <app-navbar />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import Backdrop from "@/components/Backdrop.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppNavbar from "@/components/AppNavbar.vue";
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: "App",
  components: {
    AppFooter,
    Backdrop,
    AppNavbar,
    LoginForm,
  },
};
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
