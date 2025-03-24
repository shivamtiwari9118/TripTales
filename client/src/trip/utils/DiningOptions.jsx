import { HotelImages } from "@/utils/hotelsimages";
import React from "react";
import { Link } from "react-router-dom";

const DiningOptions = ({ dining_options }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {dining_options?.map((option, index) => (
        <Link
          key={option?._id}
          to={`https://google.com/maps/search/?api=1&query=${option.restaurant_name}`}
          target="_blank"
        >
          <div className="hover:shadow-2xl py-2 px-4 rounded-md">
            <img
              className="h-[200px] md:h-[250px] lg:h-[300px] w-full object-cover rounded-md"
              src={HotelImages[index + (4 % HotelImages.length)]}
              alt=""
            />
            <h2 className="mt-2 text-lg font-bold pl-1">
              {option.restaurant_name}
            </h2>
            <div className="flex gap-2 pl-1 text-gray-600">
              <p className="text-start text-md font-bold text-gray-800">
                Cuisine Type :{" "}
              </p>
              <p className="font-semibold">{option.cuisine_type}</p>
            </div>
            <div className="pl-1 text-sm text-gray-800 flex gap-4">
              <p className="font-bold text-start">Price Range : </p>
              <p>💰 {option.price_range}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DiningOptions;
