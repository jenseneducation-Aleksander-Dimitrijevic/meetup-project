<template>
  <div class="event-container flex" v-if="event">
    <section>
      <h1 class="title">Event: {{ event.eventTitle }}</h1>
      <img :src="event.imgUrl" alt="event image" />
    </section>
    <section>
      <span class="btn-back" @click="$store.commit('DISABLE_BACKDROP')"
        >&times;</span
      >
      <h1 class="date">
        <span class="lnr lnr-calendar-full"></span>
        -
        {{ event.eventDate | moment("dddd, MMMM Do YYYY") }}
      </h1>
      <p class="description">{{ event.eventDescription }}</p>
      <p class="attendees">
        <span class="lnr lnr-users"></span>
        {{ isAttended ? event.attendees + 1 : event.attendees }}
        <button class="btn-attend" @click="attendToEvent">
          {{ isAttended ? "Leave" : "Attend" }}
        </button>
      </p>

      <form @submit.prevent="createReview">
        <h2>Review</h2>
        <input
          required
          type="text"
          placeholder="Title"
          id="title"
          v-model="input.title"
        />
        <textarea
          required
          v-model="input.message"
          placeholder="What did you like/dislike about this event?"
        ></textarea>
        <button>Send</button>
      </form>

      <ul class="review-container" ref="review">
        <li
          class="review-item"
          v-for="(eventReview, idx) in showCurrentReview(event.id)"
          :key="idx"
        >
          <h1>{{ eventReview.review.title }}</h1>
          <p>{{ eventReview.review.message }}</p>
          <span class="review-date">{{
            eventReview.date | moment("dddd, MMMM Do YYYY, HH:mm:ss")
          }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Event",
  data() {
    return {
      input: {
        title: null,
        message: null,
      },
    };
  },
  props: {
    event: Object,
  },
  methods: {
    attendToEvent() {
      if (!this.$store.getters.loggedIn) {
        alert("Please log in to attend to event");
        return;
      }
      this.$store.commit("SET_EVENT_DATA", this.event);
    },

    createReview() {
      if (!this.$store.getters.loggedIn) {
        alert("Please log in to attend to event");
        this.input = "";
        return;
      }
      this.$store.commit("SET_EVENT_REVIEW", {
        review: this.input,
        id: this.event.id,
        date: new Date(),
      });
      this.input = {};
      this.$nextTick(() => {
        this.$refs.review.scrollIntoView();
      });
    },
  },
  computed: {
    isAttended() {
      return this.$store.state.eventList.find((e) => e.id === this.event.id);
    },
    ...mapGetters(["showCurrentReview"]),
  },
};
</script>

<style lang="scss" scoped>
.event-container {
  top: 50%;
  left: 50%;
  z-index: 4;
  width: 95%;
  height: 95%;
  position: fixed;
  overflow-y: auto;
  max-width: 1168px;
  background: #fff;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px rgba(#000, 0.3);

  img {
    width: 100%;
    object-fit: contain;
  }

  section {
    padding: 1rem;
    margin: 5rem 0;
    font-size: 0.9rem;

    &:nth-child(1) {
      margin-bottom: 0;
    }

    &:nth-child(2) {
      margin-top: 0;
    }

    span.btn-back {
      top: 0.5rem;
      right: 1rem;
      font-size: 2rem;
      position: absolute;
      display: inline-block;
    }

    .title {
      font-weight: 100;
      margin-bottom: 2rem;
    }

    p {
      margin: 2rem 0;
    }

    .attendees {
      display: flex;
      align-items: center;
      span {
        margin-right: 0.5rem;
      }
      button {
        margin-left: auto;
      }
    }

    .review-container {
      list-style: none;
      &::before {
        content: "";
        width: 100%;
        height: 1px;
        display: block;
        margin-top: 3rem;
        background: #eee;
        margin-bottom: 2rem;
      }

      .review-item {
        padding: 10px;
        margin: 1rem 0;
        font-weight: 100;
        background: #fff;
        border-radius: 5px;
        border: 1px solid #eee;

        h1 {
          font-size: 1.2rem;
        }

        p {
          margin: 1rem 0;
          font-style: italic;
        }
      }

      .review-date {
        font-weight: 100;
        font-size: 0.7rem;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .event-container {
    width: 80%;
    height: 80%;
    &.flex {
      display: flex;
      img {
        flex: 1;
        object-fit: cover;
        box-shadow: 2px 0px 10px -1px rgba(0, 0, 0, 0.2);
      }
      section {
        flex: 1;
        margin: 0;
        padding: 2rem;
        overflow-y: auto;

        span.btn-back {
          margin-top: 0;
          cursor: pointer;
        }
      }

      form {
        textarea {
          height: 200px;
        }
      }
    }
  }
}
</style>
