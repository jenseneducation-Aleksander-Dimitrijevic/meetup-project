<template>
  <div class="create-event-container">
    <label for="file-input">
      <img :src="imgUrl" alt="event image" />
    </label>
    <input type="file" accept="image/*" id="file-input" @change="chooseImage" />
    <form @submit.prevent="createEvent">
      <h1>Create your event</h1>
      <input
        type="text"
        v-model="input.title"
        id="title"
        placeholder="Event title"
      />
      <textarea
        v-model="input.description"
        placeholder="Enter a description"
      ></textarea>
      <input type="date" id="date" v-model="input.date" />
      <button>Create</button>
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
        description: "",
        date: "",
        attendees: 0,
      },
      imgUrl: require("@/assets/placeholder.png"),
    };
  },

  methods: {
    chooseImage(e) {
      const file = e.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
    },

    createEvent() {
      this.$store.commit("CREATE_EVENT", {
        eventTitle: this.input.title,
        eventDate: this.input.date,
        eventDescription: this.input.description,
        attendees: this.input.attendees,
        imgUrl: this.imgUrl,
      });
      this.$router.go(-1);
      this.$store.commit("TOGGLE_BACKDROP");
    },
  },
};
</script>

<style lang="scss" scoped>
.create-event-container {
  top: 50%;
  left: 50%;
  z-index: 1;
  z-index: 4;
  width: 95%;
  height: 95%;
  position: fixed;
  max-width: 560px;
  overflow-y: auto;
  border-radius: 5px;
  background: #fff;
  padding: 2rem 1rem;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);

  #file-input {
    display: none;
  }

  img {
    width: 100%;
    display: block;
    cursor: pointer;
    border: 1px solid #ddd;
  }

  form {
    h1 {
      margin: 3rem 0 2rem 0;
    }
    &::before {
      display: none;
    }
  }

  textarea {
    height: 200px;
  }
}

@media screen and (min-width: 1024px) {
  .create-event-container {
    height: 80%;
  }
}
</style>
