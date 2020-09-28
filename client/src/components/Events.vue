<template>
  <div class="content" id="events">
    <h1>Events in Stockholm</h1>
    <Event :events="events" />
  </div>
</template>

<script>
import axios from "axios";
import Event from "@/components/Event.vue";
export default {
  name: "Events",
  data() {
    return {
      events: [],
    };
  },
  async created() {
    const RESPONSE = await axios.get("/events");
    this.events = RESPONSE.data;
  },

  components: {
    Event,
  },
};
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  margin: 4rem auto 8rem auto;
}
</style>
