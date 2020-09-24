<template>
  <nav class="app-bar">
    <button class="btn-login" @click="loginUser">
      <span class="lnr lnr-user"></span> Login
    </button>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  methods: {
    loginUser() {
      this.$store.commit("TOGGLE_LOGIN_FORM");
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
    border: none;
    color: #fff;
    transition: 0.3s;
    font-size: 1.2rem;
    margin-left: auto;
    border-radius: 3px;
    padding: 0.5rem 1rem;
    background: rgba(#000, 0.4);

    span {
      transition: 0.3s;
    }
  }
}

@media screen and (min-width: 1024px) {
  .app-bar {
    height: 80px;
    padding: 0 2rem;
    .btn-login {
      &:hover {
        opacity: 0.8;
        span {
          color: red;
        }
      }
    }
  }
}
</style>
