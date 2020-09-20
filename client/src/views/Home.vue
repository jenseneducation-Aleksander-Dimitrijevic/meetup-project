<template>
  <div>
    <app-header :imgUrl="require('@/assets/bg-image-main.jpg')">
      <h1>Welcome to the meetup!</h1>
      <button>Start right here</button>
    </app-header>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: "Home",
  components: {
    AppHeader,
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
  border: 3px solid #d50000;
}

@media screen and (min-width: 1024px) {
  h1 {
    margin-bottom: 0;
  }

  button {
    transition: 0.2s;
    &:hover {
      background: none;
    }
  }
}
</style>
