<template>
  <form
    :class="{ show: this.$store.state.isLoginFormOpen }"
    @submit.prevent="loginUser"
  >
    <span class="close-btn" @click="$store.commit('TOGGLE_LOGIN_FORM')"
      >&times;</span
    >
    <h1>Login below</h1>
    <p class="error-message">{{ error }}</p>
    <input type="text" placeholder="E-mail" id="email" v-model="input.email" />
    <input type="password" placeholder="Password" v-model="input.password" />
    <button>Login</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    loginUser() {
      this.error = "";
      if (this.input.email == "" || this.input.password == "") {
        this.error = "Form field(s) empty";
        return;
      } else if (!this.validEmail(this.input.email)) {
        this.error = "Invalid e-mail";
        return;
      }

      this.$store.commit("SET_LOADING");
      localStorage.setItem("user", JSON.stringify(this.input.email));
      this.input = "";
      this.$store.commit("TOGGLE_LOGIN_FORM");
      setTimeout(() => {
        location.reload();
        this.$store.commit("SET_LOADING");
      }, 2000);
    },

    validEmail: function (email) {
      var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regEx.test(email);
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  top: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  position: fixed;
  transition: 0.3s;
  background: #fff;
  flex-direction: column;
  justify-content: center;
  transform: translate(100%);

  &::before {
    display: none;
  }

  p.error-message {
    color: red;
    margin: 1rem 0;
    font-size: 0.8rem;
  }

  .close-btn {
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    font-size: 2rem;
    position: absolute;
  }

  input {
    width: 100%;
    margin: 1rem 0;
    padding: 10px 5px;
    border-radius: 3px;
    border: 1px solid #eee;
  }

  &.show {
    transform: translate(0);
    box-shadow: 0 0 10px rgba(#000, 0.3);
  }
}

@media screen and (min-width: 768px) {
  form {
    top: 100px;
    width: 300px;
    height: 500px;
    border-radius: 5px 0 0 5px;

    button {
      width: 100px;
      text-align: center;
    }
  }
}
</style>
