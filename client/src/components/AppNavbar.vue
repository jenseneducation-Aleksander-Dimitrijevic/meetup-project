<template>
  <nav class="app-bar">
    <h1 v-if="user" class="user-email">Logged in as: {{ user }}</h1>
    <button
      v-if="!loggedIn"
      class="btn-user-actions btn-login"
      @click="loginUser"
    >
      <span class="lnr lnr-user"></span> Login
    </button>
    <div class="btn-content" v-else>
      <button class="btn-user-actions" @click="logout">Logout</button>
      <button v-show="loggedIn" class="btn-user-actions">
        Create event
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "AppNavbar",
  methods: {
    logout() {
      localStorage.removeItem("user");
      location.reload();
    },
    ...mapMutations({
      loginUser: "TOGGLE_LOGIN_FORM",
    }),
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  data() {
    return {
      user: null,
    };
  },
  computed: {
    ...mapGetters(["loggedIn"]),
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
  background: rgba(#000, 0.4);

  .user-email {
    color: #fff;
    font-weight: 100;
    font-size: 1rem;
  }

  .btn-content {
    margin-left: auto;
  }

  .btn-user-actions {
    border: none;
    color: #fff;
    transition: 0.3s;
    font-size: 1.2rem;
    border-radius: 3px;
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    background: #00796b;

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
        background: darken(#00796b, 10%);
      }
    }
  }
}
</style>
