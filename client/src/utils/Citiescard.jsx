import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Citiescard = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://triptales-nm5q.onrender.com/cities")
      .then((res) => setData(res.data))
      .catch(() => toast.error("Some error occurred"));
  }, []);

  let navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {data.map((city) => (
        <div
          className="h-[320px] relative hover:shadow-lg cursor-pointer"
          key={city.city}
          onClick={() => navigate(`/city/${city._id}`)}
        >
          <img
            className="absolute top-0 left-0 w-[100%] h-[100%] object-cover rounded-md"
            src={city.image}
            alt={city.city}
          />
          <div className="h-[60px] w-[100%]  absolute bottom-2 px-4 flex justify-center">
            <div className="h-full w-full bg-white opacity-60 rounded-2xl"></div>
          </div>

          <div className="h-[60px] w-[100%]  absolute bottom-2 px-10 py-1">
            <h2 className="text-lg font-bold text-center">{city.city}</h2>
            <div className="flex justify-between">
              <p className="font-bold">📍 {city.country}</p>
              <p className="font-bold">⭐ {city.review}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Citiescard;
