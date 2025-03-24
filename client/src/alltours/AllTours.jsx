import { HotelImages } from "@/utils/hotelsimages";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const AllTours = () => {
  const { user } = useUser();
  let email = user?.emailAddresses[0]?.emailAddress;
  const [plan, setPlan] = useState();
  let navigate = useNavigate();
  useEffect(() => {
    if (email) {
      axios
        .get(`https://triptales-nm5q.onrender.com/generateitinerary/allplan/${email}`)
        .then((res) => {
          setPlan(res.data.data);
        })
        .catch(() => toast.error("Some error occurred"));
    }
  }, [email]);
  return (
    <div className="max-w-[1360px] m-auto mt-[85px] min-h-[79vh] px-4">
      <h2 className="text-center text-xl md:text-3xl font-bold">
        All Created Tours
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        <div
          onClick={() => navigate("/generatetrip")}
          className="shadow-lg border border-gray-950 rounded-lg flex justify-center items-center cursor-pointer min-h-[280px]"
        >
          <GoPlus className="text-4xl" />
        </div>
        {plan?.map((ele, index) => {
          return (
            <div
              key={ele._id}
              className="px-2 py-4 rounded-lg cursor-pointer hover:shadow-2xl"
              onClick={() => navigate(`/trip/${ele._id}`)}
            >
              <img
                src={HotelImages[index % HotelImages.length]}
                alt={ele.prefences.destination}
                className="h-[200px] w-full object-cover rounded-lg"
              />
              <h2 className="ml-2 mt-2 font-bold text-xl h-7 overflow-hidden">
                {ele.prefences.destination}
              </h2>
              <p className="ml-2 text-md text-gray-700 font-semibold">
                <span className="font-bold text-black mr-2">
                  Travel with :{" "}
                </span>
                {ele.prefences.travel}
              </p>
              <p className="ml-2 text-md text-gray-700 font-semibold">
                <span className="font-bold text-black mr-2">Budget : </span>💰{" "}
                {ele.prefences.budget}
              </p>
              <p className="ml-2 text-md text-gray-700 font-semibold">
                <span className="font-bold text-black mr-2">Days : </span>📅{" "}
                {ele.prefences.days}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTours;
