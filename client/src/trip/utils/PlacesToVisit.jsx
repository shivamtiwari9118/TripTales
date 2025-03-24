import { HotelImages } from "@/utils/hotelsimages";
import React from "react";
import { Link } from "react-router-dom";

const PlacesToVisit = ({ places }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {places?.map((option, index) => (
        <Link
          key={option?._id}
          to={`https://google.com/maps/search/?api=1&query=${option.place_name}`}
          target="_blank"
        >
          <div className="hover:shadow-2xl py-2 px-4 rounded-md">
            <img
              className="h-[200px] md:h-[250px] lg:h-[300px] w-full object-cover rounded-md"
              src={HotelImages[index + 2]}
              alt=""
            />
            <div className="flex justify-between items-center">
              <h2 className="mt-2 text-lg font-bold pl-1 flex-1">
                {option.place_name}
              </h2>
              <div className="flex-shrink-0 px-2">
                <span className="mt-2 inline-flex items-center text-sm font-bold px-3 py-1 bg-gray-400 rounded-full">
                  🌟 {option.rating}
                </span>
              </div>
            </div>
            <div className="flex gap-2 pl-1 text-gray-600">
              <p className="font-semibold">{option.place_details}</p>
            </div>
            <p className="text-sm text-gray-800 pl-1">
              <span className="font-bold ">Ticket Price : </span>💰{" "}
              {option.ticket_pricing}
            </p>
            <p className="text-sm text-gray-800 pl-1">
              <span className="font-bold ">Best time to visit : </span>💰{" "}
              {option.best_time_to_visit}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PlacesToVisit;
