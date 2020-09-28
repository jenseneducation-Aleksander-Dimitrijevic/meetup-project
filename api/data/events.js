const faker = require("faker");

function generateEvents() {
  let events = [];

  for (let id = 0; id < 10; id++) {
    let eventTitle = faker.lorem.sentence();
    let eventDate = faker.date.soon();
    let eventDescription = faker.lorem.lines();
    let attendees = faker.random.number(100);
    let imgUrl = faker.random.image();

    events.push({
      id,
      imgUrl,
      eventTitle,
      eventDate,
      eventDescription,
      attendees,
    });
  }

  return events;
}

module.exports = { generateEvents };
