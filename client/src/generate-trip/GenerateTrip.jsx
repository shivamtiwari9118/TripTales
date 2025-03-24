import React, { useState } from "react";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { FaSearch } from "react-icons/fa";
import { Budget, Travel } from "@/utils/option";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const GenerateTrip = () => {
  let navigate = useNavigate();
  const { user } = useUser();
  const [inputValue, setInputValue] = useState("");
  const [dayValue, setDayValue] = useState("");
  const [budgetValue, setBudgetValue] = useState("");
  const [travelValue, setTravelValue] = useState("");
  const [peopleValue, setPeopleValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const provider = new OpenStreetMapProvider();

  const handleInputChange = async (e) => {
    const query = e.target.value;
    setInputValue(query);

    if (query.length < 1) {
      setSuggestions([]);
    }

    if (query.length > 1) {
      const results = await provider.search({ query });
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.label);
    setSuggestions([]);
  };

  function handleTripGnerate() {
    if (dayValue > 5) {
      toast.error("Maximum five days allowed");
      return;
    }
    if (!inputValue || !budgetValue || !travelValue) {
      toast.error("All fields are required");
      return;
    }
    let email = user?.emailAddresses[0]?.emailAddress;
    let obj = {
      destination: inputValue,
      budget: budgetValue,
      travel: travelValue,
      days: dayValue,
      people: peopleValue,
      email: email,
    };
    setLoading(true);
    axios
      .post("https://triptales-nm5q.onrender.com/generateitinerary", obj)
      .then((res) => {
        setLoading(false);
        toast.success("Trip generated successfully");
        setInputValue("");
        setDayValue("");
        setBudgetValue("");
        setTravelValue("");
        setPeopleValue("");
        navigate(`/trip/${res.data.data._id}`);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Error generating trip. Please try again.");
      });
  }

  return (
    <div className="max-w-[800px] m-auto mt-[90px] px-4">
      <div>
        <h2 className="text-3xl font-bold">Tell us your travel preferences</h2>
        <p className="mt-2 text-gray-500">
          Just provide some basic information, and our trip planner will
          generate a customized itinerary based on your preferences.
        </p>
      </div>
      <div className="max-full m-auto mt-12 px-2">
        <div>
          <h2 className="text-xl font-normal">
            Enter the destination of your choice.
          </h2>
          <div className="relative my-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search for a place..."
              value={inputValue}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg py-[6px] pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {suggestions.length > 0 && (
              <ul className="absolute z-10 w-full border border-gray-300 bg-white rounded-lg mt-1 shadow-lg">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {suggestion.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-normal">Enter the number of day.</h2>
          <div className="relative my-2">
            <input
              type="text"
              placeholder="Eg: 2"
              value={dayValue}
              onInput={(e) => setDayValue(e.target.value)}
              className="w-full border border-gray-300 rounded-lg py-[6px] pl-2 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-normal">Select your budget.</h2>
          <p className="text-sm text-gray-500">
            The budget is exclusively allocated for activities and dining
            purposes.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            {Budget?.map((ele) => {
              return (
                <div
                  key={ele.id}
                  onClick={() => setBudgetValue(ele.title)}
                  className={`p-2 cursor-pointer shadow-md rounded-md border ${
                    budgetValue == ele.title
                      ? "shadow-lg border-2 border-black"
                      : "shadow-md"
                  }`}
                >
                  <h2 className="text-2xl cursor-pointer">{ele.icon}</h2>
                  <p className="font-bold cursor-pointer">{ele.title}</p>
                  <p className="text-sm text-gray-600 cursor-pointer">
                    {ele.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-normal">Select traveler type.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            {Travel?.map((ele) => {
              return (
                <div
                  key={ele.id}
                  onClick={() => {
                    setTravelValue(ele.title);
                    setPeopleValue(ele.people);
                  }}
                  className={`p-2 cursor-pointer shadow-md rounded-md border ${
                    travelValue == ele.title
                      ? "shadow-lg border-2 border-black"
                      : "shadow-md"
                  }`}
                >
                  <h2 className="text-2xl cursor-pointer">{ele.icon}</h2>
                  <p className="font-bold cursor-pointer">{ele.title}</p>
                  <p className="text-sm text-gray-600 cursor-pointer">
                    {ele.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button disabled={loading} onClick={handleTripGnerate}>
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin cursor-pointer" />
            ) : (
              "Create Plan"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GenerateTrip;
