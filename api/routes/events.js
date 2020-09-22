const { Router } = require("express");
const router = new Router();
const { generateEvents } = require("../data/events");

router.get("/", (req, res) => {
  try {
    const fakeData = generateEvents();
    res.status(200).json(fakeData);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

module.exports = router;
