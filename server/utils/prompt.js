let promopt = `Generate a comprehensive travel plan for a {couple} visiting {Las Vegas} for {5} days on a {cheap}-budget-friendly itinerary. The plan should be structured in JSON format and include the following components:

Hotel Options:
Hotel Name: The name of the hotel or accommodation
Hotel Address: The physical address of the hotel
Price per Night: Cost of staying per night
Geo Coordinates: Latitude and longitude for navigation
Rating: Star rating or guest rating out of 10
Description: Brief overview of hotel amenities and services offered
Daily Itinerary:
Organize the itinerary by day, allowing for dynamic customization. Each day should include:

Day 5: (where X is a dynamic variable representing each day)
Place Name: Name of the attraction or location
Place Details: Description of activities or highlights, including what makes it appealing to couples
Geo Coordinates: Latitude and longitude for navigation
Ticket Pricing: Cost of admission if applicable
Rating: Star rating or guest rating out of 10
Estimated Time to Travel: Duration to travel between locations, including walking or public transport options
Best Time to Visit: Ideal times for visiting to avoid crowds or enjoy special experiences

Dining Options:
For each day, suggest:

Restaurant Name: Affordable dining options near attractions
Cuisine Type: Type of cuisine offered
Price Range: Estimated cost per meal
Geo Coordinates: Location for easy access`;

module.exports = { promopt };
