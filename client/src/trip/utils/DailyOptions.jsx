import React from "react";
import DiningOptions from "./DiningOptions";
import PlacesToVisit from "./PlacesToVisit";

const DailyOptions = ({ plan }) => {
  return (
    <div className="px-2">
      <h2 className="text-xl md:text-2xl font-bold mt-8">Day Wise Plan</h2>
      {plan?.map((day) => {
        return (
          <div className="pl-2 mt-2" key={day._id}>
            <div className="flex">
              <h2 className="text-lg font-bold mb-4 mt-4 border-b-[2px] border-gray-800">
                <span className="text-md font-bold ">Day : </span>
                {day.day}
              </h2>
            </div>
            <h2 className="pl-2 font-bold mb-2">Places To Visit</h2>
            <PlacesToVisit places={day?.places} />
            <h2 className="pl-2 font-bold mt-8 mb-2">Dining Options</h2>
            <DiningOptions dining_options={day?.dining_options} />
          </div>
        );
      })}
    </div>
  );
};

export default DailyOptions;
