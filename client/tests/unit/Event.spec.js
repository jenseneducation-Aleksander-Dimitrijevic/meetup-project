import Event from "@/views/Event.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    eventList: [],
    eventReviews: [],
  },
  getters: {
    showCurrentReview: (state) => (id) => {
      return state.eventReviews.filter((review) => review.id == id);
    },
  },
});

describe("Event.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Event, {
      localVue,
      store,
      setProps: {
        attendees: 64,
        eventDate: "2020-09-27T02:46:42.853Z",
        eventDescription:
          "Eligendi ab aperiam nisi sed nobis unde nihil vel.↵Est id neque et.",
        eventTitle: "Cum dicta odio deserunt.",
        id: 2,
        imgUrl: "http://placeimg.com/640/480/technics",
      },
    });
  });
  test("should check if component exist ", () => {
    expect(wrapper.findComponent(Event).exists()).toBe(true);
  });
});
