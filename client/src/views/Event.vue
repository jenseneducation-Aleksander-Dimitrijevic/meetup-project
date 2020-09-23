<template>
  <div class="event-container flex" v-if="event">
    <img :src="event.imgUrl" alt="event image" />
    <section>
      <span class="lnr lnr-arrow-left btn-back" @click="$router.push({name: 'Home'})"></span>
      <h1 class="date">
        <span class="lnr lnr-calendar-full"></span>
        -
        {{ event.eventDate | moment("dddd, MMMM Do YYYY") }}
      </h1>
      <p class="title">{{ event.eventTitle }}</p>
      <p class="description">{{ event.eventDescription }}</p>
      <p class="attendees">
        <span class="lnr lnr-users"></span>
        {{ event.attendees }}
        <button>Attend</button>
      </p>

      <form>
        <h2>Omdöme</h2>
        <input type="text" placeholder="Title" />
        <textarea placeholder="What did you like/dislike about this event?"></textarea>
        <button>Send</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Event",
  props: {
    event: Object,
  },
};
</script>

<style lang="scss" scoped>
.event-container {
  top: 50%;
  left: 50%;
  z-index: 2;
  width: 95%;
  height: 95%;
  position: fixed;
  overflow-y: auto;
  background: #fff;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px rgba(#000, 0.3);

  img {
    width: 100%;
    object-fit: contain;
  }

  section {
    padding: 1rem;
    font-size: 0.9rem;

    span.btn-back {
      font-size: 2rem;
      display: inline-block;
      margin: 2rem 0 3rem 0;
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

    form {
      width: 100%;
      &::before {
        width: 100%;
        height: 1px;
        content: "";
        display: block;
        background: #ddd;
        margin-bottom: 2rem;
      }

      input,
      textarea {
        width: 100%;
        margin: 1rem 0;
        padding: 10px 5px;
        border-radius: 3px;
        border: 1px solid #eee;
      }

      textarea {
        height: 300px;
        resize: none;
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
        overflow-y: auto;
        padding: 4rem 2rem;

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