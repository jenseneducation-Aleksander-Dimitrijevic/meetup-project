<template>
  <nav class="app-bar">
    <button v-if="!$store.getters.loggedIn" class="btn-user-actions btn-login" @click="loginUser">
      <span class="lnr lnr-user"></span> Login
    </button>
    <button v-else class="btn-user-actions" @click="logout">Logout</button>
    <button v-show="$store.getters.loggedIn">Create new event</button>
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
  padding: 0 1rem;
  position: absolute;
  align-items: center;

  .btn-user-actions {
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
    .btn-user-actions {
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
