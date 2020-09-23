<template>
  <div class="footer">
    <p>&copy;{{new Date().getFullYear()}} | Created by | Aleksander Dimitrijevic</p>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  color: #fff;
  display: flex;
  padding: 5rem 1rem;
  align-items: center;
  background: #455a64;
  justify-content: center;
}
</style>