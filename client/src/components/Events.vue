<template>
  <article class="content">
    <h1>Events in {{ location }}</h1>
  </article>
</template>

<script>
export default {
  name: "Events",
  data() {
    return {
      location: "Stockholm",
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  margin: 4rem auto;

  h1 {
    font-weight: 100;
  }
}
</style>
