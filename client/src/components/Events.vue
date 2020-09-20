<template>
  <article class="content">
    <h1>Events in {{ location.name }}</h1>
  </article>
</template>

<script>
export default {
  name: "Events",
  data() {
    return {
      location: {
        name: "Stockholm",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
