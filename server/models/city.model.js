const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  city: String,
  country: String,
  review: Number,
  facilities: [String],
  description: String,
  image: String,
});

const City = mongoose.model("City", citySchema);

module.exports = { City };
