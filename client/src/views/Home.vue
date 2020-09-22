<template>
  <div>
    <app-header :imgUrl="require('@/assets/bg-image-main.jpg')">
      <h1>Welcome to the meetup.</h1>
      <button>Join today!</button>
    </app-header>
    <Events />
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
  background: #d50000;
}

@media screen and (min-width: 1024px) {
  h1 {
    margin-bottom: 0;
  }

  button {
    &:hover {
      background: darken(#d50000, 10%);
    }
  }
}
</style>
