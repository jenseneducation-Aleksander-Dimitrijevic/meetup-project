const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const cors = require("cors");

const fakeRouter = require("./routes/events");

app.use(express.json());
app.use(cors());

app.use("/api/events", fakeRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/public")));
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "/public", "index.html"))
  );
}

app.get("/", (req, res) => {
  app.use(express.static(path.join(__dirname, "../client/public")));
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/public", "index.html"))
  );
});

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`));
