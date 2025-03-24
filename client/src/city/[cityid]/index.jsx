import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const CityDetails = () => {
  let { cityid } = useParams();
  const [city, setCity] = useState({});
  let navigate = useNavigate();
  useEffect(() => {
    if (cityid) {
      axios
        .get(`https://triptales-nm5q.onrender.com/cities/${cityid}`)
        .then((response) => {
          setCity(response.data);
        })
        .catch((error) => {
          toast.error("Some error occurred");
        });
    }
  }, []);
  return (
    <div className="max-w-[800px] m-auto mt-[85px] px-4">
      <div className="w-full flex flex-col justify-center px-4 shadow-xl py-4 rounded-2xl">
        <div className="w-full">
          <img
            src={city.image}
            alt={city.city}
            className="rounded-2xl object-cover h-[40vh] md:h-[60vh] w-full"
          />
        </div>
        <div className="mt-6 md:mt-8 px-2 md:px-4 flex justify-between">
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-bold">City :</h2>
            <h2 className="text-xl font-semibold">{city.city}</h2>
          </div>
          <div className="flex gap-2 items-center">
            <h2 className="text-lg font-semibold">Rating :</h2>
            <h2 className="text-lg font-semibold">⭐ {city.review}</h2>
          </div>
        </div>

        <div className="mt-2 px-2 md:px-4 flex">
          <p className="text-sm bg-gray-600 text-white px-2 py-[1px] rounded-full">
            📍 {city.country}
          </p>
        </div>
        <div className="mt-3 px-2 md:px-4 flex">
          <div className="border-b-[2px] border-gray-800 px-1">
            <h2 className="text-lg font-bold">Facilities</h2>
          </div>
        </div>

        <div className="mt-3 px-2 md:px-4 flex flex-wrap gap-2">
          {city?.facilities?.map((facility) => {
            return (
              <div key={facility} className="flex gap-2 items-center px-1">
                <p className="text-sm bg-gray-600 shadow-md text-white px-2 py-1 rounded-xl">
                  {facility}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-3 px-2 md:px-4 flex">
          <div className="border-b-[2px] border-gray-800 px-1">
            <h2 className="text-lg font-bold">About {city.city}</h2>
          </div>
        </div>

        <div className="mt-3 px-2 md:px-5">
          <p className="text-sm">{city.description}</p>
        </div>
        <div className="mt-3 px-2 md:px-5">
          <Button onClick={() => navigate("/")} className="bg-gray-600">
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
