const {
  createItinerary,
  getSpecificPlan,
  getAllPlan,
} = require("../controller/itinerary.controller");

const itineraryRoute = require("express").Router();

itineraryRoute.post("/", createItinerary);

itineraryRoute.get("/allplan/:email", getAllPlan);

itineraryRoute.get("/:id", getSpecificPlan);

module.exports = { itineraryRoute };
