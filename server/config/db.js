require("dotenv").config();

const mongoose = require("mongoose");

let URI = process.env.MONGO_URI;

const connection = mongoose.connect(URI);

module.exports = { connection };
