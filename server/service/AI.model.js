const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a comprehensive travel plan for a couple visiting Las Vegas for 5 days on a cheap-budget-friendly itinerary. The plan should be structured in JSON format and include the following components:\n\nHotel Options:\nHotel Name: The name of the hotel or accommodation\nHotel Address: The physical address of the hotel\nPrice per Night: Cost of staying per night\nGeo Coordinates: Latitude and longitude for navigation\nRating: Star rating or guest rating out of 10\nDescription: Brief overview of hotel amenities and services offered\nDaily Itinerary:\nOrganize the itinerary by day, allowing for dynamic customization. Each day should include:\n\nDay 5: (where X is a dynamic variable representing each day)\nPlace Name: Name of the attraction or location\nPlace Details: Description of activities or highlights, including what makes it appealing to couples\nGeo Coordinates: Latitude and longitude for navigation\nTicket Pricing: Cost of admission if applicable\nRating: Star rating or guest rating out of 10\nEstimated Time to Travel: Duration to travel between locations, including walking or public transport options\nBest Time to Visit: Ideal times for visiting to avoid crowds or enjoy special experiences\n\nDining Options:\nFor each day, suggest:\n\nRestaurant Name: Affordable dining options near attractions\nCuisine Type: Type of cuisine offered\nPrice Range: Estimated cost per meal\nGeo Coordinates: Location for easy access",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotel_options": [\n    {\n      "hotel_name": "The D Las Vegas",\n      "hotel_address": "301 Fremont Street, Las Vegas, NV 89101",\n      "price_per_night": 40,\n      "geo_coordinates": [36.1699, -115.1426],\n      "rating": 7.5,\n      "description": "A downtown hotel with a retro vibe, offering affordable rooms, a casino, and a rooftop pool with city views."\n    },\n    {\n      "hotel_name": "Golden Nugget",\n      "hotel_address": "129 E Fremont Street, Las Vegas, NV 89101",\n      "price_per_night": 60,\n      "geo_coordinates": [36.1694, -115.1419],\n      "rating": 8.0,\n      "description": "A classic Las Vegas hotel with a lively casino, a shark tank, and a variety of restaurants and bars."\n    },\n    {\n      "hotel_name": "Circus Circus",\n      "hotel_address": "2880 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price_per_night": 45,\n      "geo_coordinates": [36.1123, -115.1726],\n      "rating": 6.5,\n      "description": "A family-friendly hotel with a circus theme, offering affordable rooms, a carnival midway, and a variety of entertainment options."\n    }\n  ],\n  "daily_itinerary": [\n    {\n      "day": 1,\n      "places": [\n        {\n          "place_name": "Fremont Street Experience",\n          "place_details": "A vibrant pedestrian mall with live music, street performers, and a dazzling light show on a canopy overhead. A great place to soak in the energy of downtown Las Vegas.",\n          "geo_coordinates": [36.1697, -115.1425],\n          "ticket_pricing": "Free",\n          "rating": 8.5,\n          "estimated_time_to_travel": "Walking distance from most downtown hotels",\n          "best_time_to_visit": "Evening for the light show"\n        },\n        {\n          "place_name": "Neon Museum",\n          "place_details": "An outdoor museum displaying a collection of historic Las Vegas neon signs, offering a glimpse into the city\'s colorful past.",\n          "geo_coordinates": [36.1704, -115.1333],\n          "ticket_pricing": "$20",\n          "rating": 9.0,\n          "estimated_time_to_travel": "10-minute walk from Fremont Street Experience",\n          "best_time_to_visit": "Late afternoon for the best lighting"\n        }\n      ],\n      "dining_options": [\n        {\n          "restaurant_name": "Heart Bar",\n          "cuisine_type": "American",\n          "price_range": "$15-$25",\n          "geo_coordinates": [36.1698, -115.1424]\n        },\n        {\n          "restaurant_name": "The Donut Bar",\n          "cuisine_type": "Desserts",\n          "price_range": "$5-$10",\n          "geo_coordinates": [36.1705, -115.1408]\n        }\n      ]\n    },\n    {\n      "day": 2,\n      "places": [\n        {\n          "place_name": "Hoover Dam",\n          "place_details": "A monumental engineering marvel, offering tours and breathtaking views of the Colorado River and the surrounding desert landscape.",\n          "geo_coordinates": [36.0065, -114.9835],\n          "ticket_pricing": "Free for the visitor center, tours available",\n          "rating": 9.5,\n          "estimated_time_to_travel": "1-hour drive from Las Vegas",\n          "best_time_to_visit": "Morning to avoid the heat"\n        },\n        {\n          "place_name": "Lake Mead National Recreation Area",\n          "place_details": "A sprawling desert oasis with opportunities for hiking, boating, fishing, and enjoying scenic views.",\n          "geo_coordinates": [36.1218, -114.9591],\n          "ticket_pricing": "Entrance fee for national parks",\n          "rating": 8.0,\n          "estimated_time_to_travel": "Short drive from Hoover Dam",\n          "best_time_to_visit": "Any time of day, depending on preferred activity"\n        }\n      ],\n      "dining_options": [\n        {\n          "restaurant_name": "Boulder City Cafe",\n          "cuisine_type": "American",\n          "price_range": "$10-$20",\n          "geo_coordinates": [36.0073, -114.9835]\n        },\n        {\n          "restaurant_name": "The Coffee Cup",\n          "cuisine_type": "Cafe",\n          "price_range": "$5-$10",\n          "geo_coordinates": [36.1221, -114.9594]\n        }\n      ]\n    },\n    {\n      "day": 3,\n      "places": [\n        {\n          "place_name": "Bellagio Conservatory & Botanical Garden",\n          "place_details": "A stunning indoor garden featuring elaborate floral displays, changing seasonally, offering a tranquil escape from the Las Vegas bustle.",\n          "geo_coordinates": [36.1180, -115.1733],\n          "ticket_pricing": "Free",\n          "rating": 8.5,\n          "estimated_time_to_travel": "Walkable from most Strip hotels",\n          "best_time_to_visit": "Any time of day, but most impressive in the afternoon with natural light"\n        },\n        {\n          "place_name": "The Strip",\n          "place_details": "The iconic heart of Las Vegas, lined with world-class casinos, hotels, restaurants, and entertainment venues. Stroll along the Strip, marvel at the dazzling lights, and experience the energy of the city.",\n          "geo_coordinates": [36.1146, -115.1727],\n          "ticket_pricing": "Varies depending on attractions",\n          "rating": 9.0,\n          "estimated_time_to_travel": "Walkable or take the monorail",\n          "best_time_to_visit": "Evening for the full dazzling effect"\n        }\n      ],\n      "dining_options": [\n        {\n          "restaurant_name": "The Buffet at Bellagio",\n          "cuisine_type": "International",\n          "price_range": "$30-$50",\n          "geo_coordinates": [36.1180, -115.1733]\n        },\n        {\n          "restaurant_name": "In-N-Out Burger",\n          "cuisine_type": "Fast Food",\n          "price_range": "$5-$10",\n          "geo_coordinates": [36.1148, -115.1729]\n        }\n      ]\n    },\n    {\n      "day": 4,\n      "places": [\n        {\n          "place_name": "Red Rock Canyon National Conservation Area",\n          "place_details": "A scenic drive through rugged desert landscapes with stunning rock formations, offering hiking trails, rock climbing opportunities, and picturesque views.",\n          "geo_coordinates": [36.1942, -115.4995],\n          "ticket_pricing": "Entrance fee for national parks",\n          "rating": 9.0,\n          "estimated_time_to_travel": "30-minute drive from Las Vegas",\n          "best_time_to_visit": "Morning or late afternoon for cooler temperatures"\n        },\n        {\n          "place_name": "The LINQ Promenade",\n          "place_details": "An outdoor shopping, dining, and entertainment district on the Strip, featuring a variety of restaurants, shops, and the High Roller observation wheel.",\n          "geo_coordinates": [36.1164, -115.1717],\n          "ticket_pricing": "Varies depending on attractions",\n          "rating": 7.5,\n          "estimated_time_to_travel": "Walkable from most Strip hotels",\n          "best_time_to_visit": "Evening for the illuminated High Roller"\n        }\n      ],\n      "dining_options": [\n        {\n          "restaurant_name": "Shake Shack",\n          "cuisine_type": "Fast Food",\n          "price_range": "$10-$20",\n          "geo_coordinates": [36.1164, -115.1717]\n        },\n        {\n          "restaurant_name": "Yard House",\n          "cuisine_type": "American",\n          "price_range": "$15-$30",\n          "geo_coordinates": [36.1165, -115.1718]\n        }\n      ]\n    },\n    {\n      "day": 5,\n      "places": [\n        {\n          "place_name": "The Venetian and The Palazzo",\n          "place_details": "A sprawling resort complex featuring a replica of Venice, Italy, with canals, gondolas, and a luxurious shopping mall. Enjoy a romantic gondola ride and explore the upscale boutiques and restaurants.",\n          "geo_coordinates": [36.1138, -115.1719],\n          "ticket_pricing": "Gondola rides are priced separately",\n          "rating": 8.0,\n          "estimated_time_to_travel": "Walkable from most Strip hotels",\n          "best_time_to_visit": "Any time of day, gondolas are most romantic in the evening"\n        },\n        {\n          "place_name": "The High Roller Observation Wheel",\n          "place_details": "A giant observation wheel offering panoramic views of the Las Vegas Strip and the surrounding desert landscape. Enjoy a romantic ride with cocktails and music.",\n          "geo_coordinates": [36.1163, -115.1718],\n          "ticket_pricing": "$30-$40",\n          "rating": 8.5,\n          "estimated_time_to_travel": "Walkable from The LINQ Promenade",\n          "best_time_to_visit": "Evening for the best views and illuminated cityscape"\n        }\n      ],\n      "dining_options": [\n        {\n          "restaurant_name": "Grand Canal Shoppes Food Court",\n          "cuisine_type": "Various",\n          "price_range": "$10-$25",\n          "geo_coordinates": [36.1138, -115.1719]\n        },\n        {\n          "restaurant_name": "Gordon Ramsay Hell\'s Kitchen",\n          "cuisine_type": "American",\n          "price_range": "$30-$50",\n          "geo_coordinates": [36.1139, -115.1718]\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Please note:**\n\n* This itinerary is just a suggestion and can be customized to fit your preferences. \n* Prices are approximate and may vary depending on the time of year and availability.\n* Consider using public transport or ride-sharing services to save money on transportation costs. \n* Book attractions and tours in advance to secure the best deals and availability, especially during peak seasons. \n* Look for coupons and discounts online or in local publications for restaurants and attractions.\n* Enjoy your trip to Las Vegas!',
        },
      ],
    },
  ],
});

module.exports = { chatSession };
