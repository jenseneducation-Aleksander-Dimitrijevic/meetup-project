<template>
  <article v-if="events">
    <div class="grid">
      <section
        class="event-item"
        v-for="event in events"
        :key="event.id"
        @click="showEvent(event)"
      >
        <img :src="event.imgUrl" alt="event image" />
        <section class="event-content">
          <h2 class="date">
            <span class="lnr lnr-calendar-full"></span>
            {{ event.eventDate | moment("dddd, MMMM Do YYYY") }}
          </h2>
          <p class="title">{{ event.eventTitle }}</p>
          <p class="description">{{ event.eventDescription }}</p>
          <p class="attendees">
            <span class="lnr lnr-users"></span>
            {{ event.attendees }}
          </p>
        </section>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: "Event",
  props: ["events"],
  methods: {
    showEvent(event) {
      this.$store.commit("TOGGLE_BACKDROP");
      this.$router
        .push({ name: "event", params: { id: event.id, event } })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss">
.grid {
  gap: 2rem 0;
  display: grid;
  margin: 4rem 0;

  .event-item {
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #eee;

    img {
      width: 100%;
      display: block;
      border-radius: 5px 5px 0 0;
    }

    .event-content {
      padding: 1rem;
      display: flex;
      flex-direction: column;

      .date {
        color: #999;
        font-size: 1rem;

        span {
          color: #00796b;
        }
      }

      .title {
        margin: 1rem 0;
        font-weight: 600;
        font-size: 1.1rem;
      }

      .description {
        line-height: 1.7;
        font-size: 0.9rem;
      }

      .attendees {
        color: #999;
        font-size: 1rem;
        margin-top: 1rem;

        span {
          font-weight: bold;
          color: #00796b;
        }
      }
    }
  }
}

h1 {
  font-weight: 100;
}

@media screen and (min-width: 1024px) {
  .content {
    .grid {
      gap: 2rem;
      grid-template-columns: repeat(3, 1fr);

      .event-item {
        transition: 0.3s;
        &:hover {
          box-shadow: 0 0 25px rgba(#000, 0.2);
        }
      }
    }
  }
}
</style>
