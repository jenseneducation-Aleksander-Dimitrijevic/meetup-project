const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/public")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`));
