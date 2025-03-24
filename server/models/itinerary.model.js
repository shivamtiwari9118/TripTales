const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  useremail: {
    type: String,
    required: true,
  },
  prefences: {
    budget: {
      type: String,
      required: true,
    },
    days: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    people: {
      type: String,
      required: true,
    },
    travel: {
      type: String,
      required: true,
    },
  },
  hotel_options: [
    {
      hotel_name: { type: String, required: true },
      hotel_address: { type: String, required: true },
      price_per_night: { type: Number, required: true },
      geo_coordinates: { type: [Number], required: true },
      rating: { type: Number, required: true },
      description: { type: String, required: true },
    },
  ],
  daily_itinerary: [
    {
      day: { type: Number, required: true },
      places: [
        {
          place_name: { type: String, required: true },
          place_details: { type: String, required: true },
          geo_coordinates: { type: [Number], required: true },
          ticket_pricing: { type: String, required: true },
          rating: { type: Number, required: true },
          estimated_time_to_travel: { type: String, required: true },
          best_time_to_visit: { type: String, required: true },
        },
      ],
      dining_options: [
        {
          restaurant_name: { type: String, required: true },
          cuisine_type: { type: String, required: true },
          price_range: { type: String, required: true },
          geo_coordinates: { type: [Number], required: true },
        },
      ],
    },
  ],
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;
