<template>
  <div class="event-container flex" v-if="event">
    <img :src="event.imgUrl" alt="event image" />
    <section>
      <h1 class="date">
        <span class="lnr lnr-calendar-full"></span>
        {{ event.eventDate | moment("dddd, MMMM Do YYYY") }}
      </h1>
      <p class="title">{{ event.eventTitle }}</p>
      <p class="description">{{ event.eventDescription }}</p>
      <p class="attendees">
        <span class="lnr lnr-users"></span>
        {{ event.attendees }}
        <button>Gå med</button>
      </p>

      <form>
        <h2>Omdöme</h2>
        <input type="text" placeholder="Rubrik" />
        <textarea placeholder="Ditt omdöme"></textarea>
        <button>Skicka</button>
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

      input,
      textarea {
        width: 100%;
        margin: 1rem 0;
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
    &.flex {
      display: flex;
      img {
        flex: 1;
        object-fit: cover;
        box-shadow: 2px 0px 10px -1px rgba(0, 0, 0, 0.2);
      }
      section {
        flex: 1;
      }
    }
  }
}
</style>