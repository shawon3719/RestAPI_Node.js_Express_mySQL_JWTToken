const express = require("express");
// const { response } = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "Ths is working",
  });
});

app.listen(3000, () => {
  console.log("Server up and running");
});
