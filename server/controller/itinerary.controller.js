const Itinerary = require("../models/itinerary.model");
const { chatSession } = require("../service/AI.model");
const { promopt } = require("../utils/prompt");

const createItinerary = async (req, res) => {
  let { budget, days, destination, people, travel, email } = req.body;

  let finalprompt = promopt
    .replace("{couple}", travel)
    .replace("{Las Vegas}", destination)
    .replace("{5}", days)
    .replace("{cheap}", budget);

  try {
    const result = await chatSession.sendMessage(finalprompt);
    let responseText = await result.response.text();
    let parsedResponse = JSON.parse(responseText);
    const itinerary = new Itinerary({
      useremail: email,
      prefences: {
        budget: budget,
        days: days,
        destination: destination,
        people: people,
        travel: travel,
      },
      hotel_options: parsedResponse.hotel_options.map((hotel) => ({
        hotel_name: hotel.hotel_name,
        hotel_address: hotel.hotel_address,
        price_per_night:
          typeof hotel.price_per_night == "number"
            ? hotel.price_per_night
            : parseInt(hotel.price_per_night.replace(/[^0-9]/g, "")),
        geo_coordinates: hotel.geo_coordinates,
        rating: hotel.rating,
        description: hotel.description,
      })),
      daily_itinerary: parsedResponse.daily_itinerary.map((day) => ({
        day: day.day,
        places: day.places.map((place) => ({
          place_name: place.place_name,
          place_details: place.place_details,
          geo_coordinates: place.geo_coordinates,
          ticket_pricing: place.ticket_pricing,
          rating: place.rating,
          estimated_time_to_travel: place.estimated_time_to_travel,
          best_time_to_visit: place.best_time_to_visit,
        })),
        dining_options: day.dining_options.map((restaurant) => ({
          restaurant_name: restaurant.restaurant_name,
          cuisine_type: restaurant.cuisine_type,
          price_range: restaurant.price_range,
          geo_coordinates: restaurant.geo_coordinates,
        })),
      })),
    });
    await itinerary.save();
    res.json({ message: "Itinerary created successfully", data: itinerary });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getSpecificPlan = async (req, res) => {
  const { id } = req.params;
  try {
    const itinerary = await Itinerary.findById(id);
    if (!itinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }
    res.json({ message: "Itinerary found successfully", data: itinerary });
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};

const getAllPlan = async (req, res) => {
  const { email } = req.params;
  try {
    const itinerary = await Itinerary.find({ useremail: email });
    if (!itinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }
    res.json({ message: "Itinerary found successfully", data: itinerary });
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createItinerary, getSpecificPlan, getAllPlan };
