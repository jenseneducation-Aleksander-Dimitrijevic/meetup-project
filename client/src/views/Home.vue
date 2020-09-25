<template>
  <div>
    <app-header :imgUrl="require('@/assets/bg-image-main.jpg')">
      <h1>Welcome to the meetup.</h1>
      <button>Join today!</button>
    </app-header>
    <Events />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import Events from "@/components/Events.vue";
export default {
  name: "Home",
  components: {
    AppHeader,
    Events,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 1rem;
}
button {
  width: 200px;
  border: none;
  color: #fff;
  font-size: 17px;
  cursor: pointer;
  padding: 18px 15px;
  border-radius: 3px;
  background: #00796b;
}

@media screen and (min-width: 1024px) {
  h1 {
    margin-bottom: 0;
  }

  button {
    transition: 0.3s;
    &:hover {
      background: darken(#00796b, 10%);
    }
  }
}
</style>
