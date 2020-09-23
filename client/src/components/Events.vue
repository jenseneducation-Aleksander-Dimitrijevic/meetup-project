<template>
  <article class="content">
    <h1>Events in Stockholm</h1>
    <div class="grid">
      <section class="event-item" v-for="event in events.events" :key="event.id">
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
import axios from "axios";
export default {
  name: "Events",
  data() {
    return {
      events: [],
    };
  },
  async created() {
    const RESPONSE = await axios.get("//localhost:5000/events");
    this.events = RESPONSE.data;
  },
};
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  margin: 4rem auto 8rem auto;

  .grid {
    gap: 2rem 0;
    display: grid;
    margin: 4rem 0;

    .event-item {
      border-radius: 5px;
      border: 1px solid #ccc;

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
        }
      }
    }
  }

  h1 {
    font-weight: 100;
  }
}

@media screen and (min-width: 1024px) {
  .content {
    .grid {
      gap: 2rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
