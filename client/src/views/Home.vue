<template>
  <div id="home">
    <app-header :imgUrl="require('@/assets/bg-image-main.jpg')">
      <h1>Welcome to the meetup.</h1>
      <a
        class="btn-navigate"
        v-scroll-to="{
          el: '#events',
          duration: 1000,
          easing: 'ease',
          offset: -100,
        }"
        >Join today!</a
      >
    </app-header>
    <add-event />
    <Events />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import Events from "@/components/Events.vue";
import AddEvent from "@/components/AddEvent.vue";
export default {
  name: "Home",
  components: {
    AppHeader,
    Events,
    AddEvent,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 1rem;
}
.btn-navigate {
  width: 200px;
  border: none;
  color: #fff;
  margin: auto;
  display: block;
  font-size: 17px;
  cursor: pointer;
  text-align: center;
  padding: 18px 15px;
  border-radius: 3px;
  background: #00796b;
  text-decoration: none;
}

@media screen and (min-width: 1024px) {
  h1 {
    margin-bottom: 0;
  }

  .btn-navigate {
    margin: 2rem 0 0 0;
    transition: 0.3s;
    &:hover {
      background: darken(#00796b, 10%);
    }
  }
}
</style>
