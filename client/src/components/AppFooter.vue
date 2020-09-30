<template>
  <div class="footer">
    <p>
      &copy;{{ new Date().getFullYear() }} | Created by | Aleksander
      Dimitrijevic
    </p>
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
  height: 450px;
  display: flex;
  text-align: center;
  align-items: center;
  background: #263238;
  justify-content: center;

  p {
    margin-top: 100px;
  }
}

@media screen and (min-width: 1024px) {
  .footer {
    clip-path: polygon(0 25%, 100% 5%, 100% 100%, 0% 100%);
  }
}
</style>
