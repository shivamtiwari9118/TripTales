require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { paymentRoute } = require("./routes/payment.route");
const { connection } = require("./config/db");
const { cityRoute } = require("./routes/city.route");
const { itineraryRoute } = require("./routes/itinerary.route");
const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to TripTales!",
    health: "Working Fine",
  });
});

app.use("/order", paymentRoute);

app.use("/cities", cityRoute);

app.use("/generateitinerary", itineraryRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connection;
  console.log("Connected to the database");
});
