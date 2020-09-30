<template>
  <div class="spinner" :class="{ show: $store.state.isLoading }"></div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style lang="scss" scoped>
.spinner {
  &.show {
    top: 50%;
    left: 50%;
    z-index: 999;
    width: 100px;
    height: 100px;
    position: fixed;
    border-radius: 50%;
    border: 10px solid #eee;
    animation: spin 0.9s infinite;
    border-top: 10px solid #00796b;

    @keyframes spin {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  }
}
</style>
