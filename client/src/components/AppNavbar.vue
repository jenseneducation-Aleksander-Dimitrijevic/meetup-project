<template>
  <nav class="app-bar">
    <button
      v-if="!$store.getters.loggedIn"
      class="btn-user-actions btn-login"
      @click="loginUser"
    >
      <span class="lnr lnr-user"></span> Login
    </button>
    <div class="btn-content" v-else>
      <button class="btn-user-actions" @click="logout">Logout</button>
      <button v-show="$store.getters.loggedIn" class="btn-user-actions">
        Create event
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  methods: {
    loginUser() {
      this.$store.commit("TOGGLE_LOGIN_FORM");
    },
    logout() {
      localStorage.removeItem("user");
      location.reload();
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
  position: fixed;
  padding: 0 1rem;
  align-items: center;
  background: rgba(#000, 0.1);
  .btn-content {
    margin-left: auto;
  }

  .btn-user-actions {
    border: none;
    color: #000;
    transition: 0.3s;
    font-size: 1.2rem;
    border-radius: 3px;
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(#fff, 0.9);

    &.btn-login {
      margin-left: auto;
    }
    span {
      transition: 0.3s;
    }
  }
}

@media screen and (min-width: 1024px) {
  .app-bar {
    height: 80px;
    padding: 0 2rem;
    .btn-user-actions {
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
