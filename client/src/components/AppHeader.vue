<template>
  <header class="container" :style="{ backgroundImage: `url(${imgUrl})` }">
    <div class="content">
      <slot />
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0 1rem;
  background: no-repeat center center/cover;
  &::before {
    top: 0;
    right: 0;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(#000, 0.45);
  }
}

.content {
  width: 100%;
  margin: auto;
  color: #fff;
  font-size: 1.5rem;
  max-width: 1024px;
  position: relative;
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .container {
    clip-path: polygon(0 0, 100% 0%, 100% 85%, 0 95%);
  }
  .content {
    font-size: 3rem;
    text-align: left;
    text-shadow: 0 0 10px rgba(#000, 0.55);
  }
}
</style>
