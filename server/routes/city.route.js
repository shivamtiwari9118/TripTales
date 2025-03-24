const {
  createCity,
  allCity,
  specificCity,
} = require("../controller/city.controller");

const cityRoute = require("express").Router();

cityRoute.post("/", createCity);

cityRoute.get("/", allCity);

cityRoute.get("/:id", specificCity);

module.exports = { cityRoute };
