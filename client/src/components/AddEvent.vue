<template>
  <div class="content" v-if="addEvent.length > 0">
    <h1>Newly added event(s)</h1>
    <Event :events="addEvent" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Event from "@/components/Event.vue";
export default {
  name: "AddEvent",
  computed: { ...mapState(["addEvent"]) },
  components: {
    Event,
  },
};
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
}
</style>
