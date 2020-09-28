<template>
  <div>
    <form>
      <input type="text" v-model="input.title" id="title" />
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateEvent",
  data() {
    return {
      input: {
        title: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
