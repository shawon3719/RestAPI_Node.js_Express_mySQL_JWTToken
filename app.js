require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const sliderRouter = require("./api/sliders/slider.router");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/sliders", sliderRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on port :", process.env.APP_PORT);
});
