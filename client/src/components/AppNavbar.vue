<template>
  <nav class="app-bar">
    <button class="btn-login" @click="loginUser">Log in</button>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  methods: {
    loginUser() {
      this.$store.commit("testMutation", { msg: "Mutation payload" });
    },
  },
};
</script>

<style lang="scss" scoped>
.app-bar {
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 60px;
  display: flex;
  padding: 0 1rem;
  position: absolute;
  align-items: center;

  .btn-login {
    margin-left: auto;
  }
}
</style>
