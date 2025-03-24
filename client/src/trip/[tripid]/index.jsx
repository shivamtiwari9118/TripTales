import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { HotelImages } from "@/utils/hotelsimages";
import DailyOptions from "../utils/DailyOptions";

const FinalTrip = () => {
  let { tripid } = useParams();
  const [plan, setPlan] = useState();
  const [imageURL, setImageURL] = useState("");
  let defaultImage =
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D";

  useEffect(() => {
    if (tripid) {
      axios
        .get(`https://triptales-nm5q.onrender.com/generateitinerary/${tripid}`)
        .then((res) => {
          setPlan(res.data.data);
          fetchHotelImages(
            "Tourism+awards",
            res.data.data?.prefences?.destination
          );
        })
        .catch((err) => {
          toast.error("Something went wrong");
        });
    }
  }, [tripid]);

  const fetchHotelImages = async (type, location) => {
    const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${type}+${location}&per_page=1`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const imgURL = response.data.photos[0]?.src.original;
      setImageURL(imgURL);
    } catch (error) {
      toast.error("Failed to fetch hotel images");
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="max-w-[1360px] m-auto mt-[80px]">
      <div className="px-4 h-[250px] md:h-[450px]">
        <img
          className="object-cover rounded-md h-[100%] w-full"
          src={imageURL ? imageURL : defaultImage}
          alt="Hotel"
        />
      </div>
      <div className="px-6 flex justify-between items-center">
        <div>
          <div>
            <h2 className="text-2xl font-bold mt-5">
              {plan?.prefences?.destination}
            </h2>
            <div className="flex gap-2 flex-wrap md:flex-nowrap mt-3">
              <p className="px-3 py-1 bg-gray-500 text-white rounded-xl">
                📅 {plan?.prefences?.days} Days
              </p>
              <p className="px-3 py-1 bg-gray-500 text-white rounded-xl ">
                💰 {plan?.prefences?.budget}
              </p>
              <p className="px-3 py-1 bg-gray-500 text-white rounded-xl hidden md:block">
                🧑🏼‍🤝‍🧑🏼 {plan?.prefences?.people}
              </p>
            </div>
          </div>
        </div>
        <div>
          <Button onClick={handleShare}>
            <IoIosSend />
          </Button>
        </div>
      </div>

      <div className="px-6 flex">
        <h2 className="text-xl md:text-2xl font-bold mt-8">
          Hotel Recommendation
        </h2>
      </div>

      <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {plan?.hotel_options?.map((hotel, index) => {
          return (
            <Link
              key={hotel.geo_coordinates[0]}
              to={`https://google.com/maps/search/?api=1&query=${hotel.hotel_name},${hotel.hotel_address}}}`}
              target="_blank"
            >
              <div className="px-2 py-4 hover:shadow-2xl rounded-md cursor-pointer">
                <img
                  src={HotelImages[index]}
                  alt={hotel.hotel_name}
                  className="h-[250px] w-full rounded-md object-cover"
                />
                <div className="flex justify-between items-center">
                  <h2 className="mt-2 text-lg font-bold pl-1 flex-1">
                    {hotel.hotel_name}
                  </h2>
                  <div className="flex-shrink-0 px-2">
                    <span className="mt-2 inline-flex items-center text-sm font-bold px-3 py-1 bg-gray-400 rounded-full">
                      🌟 {hotel.rating}
                    </span>
                  </div>
                </div>
                <p className="mt-2 px-2 text-sm text-gray-600">
                  <span className="text-md text-gray-700 font-bold">
                    About :{" "}
                  </span>
                  {hotel.description}
                </p>
                <div className="mt-2 px-2 text-sm text-gray-800 flex gap-4">
                  <p className="font-bold text-start">Price : </p>
                  <p>{hotel.price_per_night}/night</p>
                </div>
                <p className="mt-2 px-2 text-sm text-gray-800">
                  <span className="text-md text-gray-700 font-bold">
                    Add :{" "}
                  </span>
                  📍 {hotel.hotel_address}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="px-4">
        <DailyOptions plan={plan?.daily_itinerary} />
      </div>
    </div>
  );
};

export default FinalTrip;
