const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const cors = require("cors");

const fakeRouter = require("./routes/events");

app.use(express.json());
app.use(cors());

app.use("/events", fakeRouter);

app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public", "index.html"))
);

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`));
