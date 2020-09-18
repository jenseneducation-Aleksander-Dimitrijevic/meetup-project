<template>
  <div>
    <app-header :imgUrl="require('@/assets/bg-image-main.jpg')">
      <h1>Welcome to the meetup!</h1>
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
</style>