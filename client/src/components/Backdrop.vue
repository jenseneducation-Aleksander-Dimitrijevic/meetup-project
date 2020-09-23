<template>
  <div
    class="back-drop"
    :class="{ show: this.$store.state.isBackdropOpen }"
    @click="$store.commit('DISABLE_BACKDROP')"
  ></div>
</template>

<script>
export default {
  name: "Backdrop",
};
</script>

<style lang="scss" scoped>
.back-drop {
  &.show {
    top: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: fixed;
    transition: 0.3s;
    background: rgba(#000, 0.9);
  }
}
</style>
