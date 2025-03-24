import { Button } from "@/components/ui/button";
import Carousels from "@/utils/Carousel";
import Citiescard from "@/utils/Citiescard";
import Queries from "@/utils/Queries";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="max-w-[1360px] m-auto mt-[80px] px-4 mb-16">
      <div className="relative h-[250px] md:h-[450px]">
        <img
          src="/hero-banner-bg-image.jpeg"
          alt="hero-banner-bg"
          className="object-cover rounded-md h-[100%] w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-10 rounded-md"></div>
        <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center items-center flex-col">
          <p className="text-white text-3xl md:text-6xl font-bold text-center">
            Hi, I'm TripTales,
          </p>
          <p className="text-white text-3xl md:text-6xl font-bold text-center">
            your personal trip planner agent
          </p>
          <div className="mt-6">
            <Button
              onClick={() => navigate("/generatetrip")}
              variant="secondary"
              className="rounded-full text-lg py-6 px-6"
            >
              🚀 Create a new trip
            </Button>
          </div>
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center pt-8">
        Your Next Journey, Optimized
      </h2>
      <p className="mt-8 text-center text-md text-gray-500 md:text-xl w-[300px] md:w-[600px] lg:text-xl lg:w-[600px] xl:w-[800px] m-auto">
        Build and optimize your itineraries with our free AI trip planner.
        Designed for vacations and everyday adventures.
      </p>
      <div className="flex justify-center items-center mt-8">
        <Button
          onClick={() => navigate("/generatetrip")}
          className="rounded-full text-lg py-6 px-6 bg-[#1ba0e2]"
        >
          🚀 Create a new trip
        </Button>
      </div>

      <div className="flex">
        <h2 className="text-xl font-bold border-b-[2px] border-gray-700 mt-12 px-1 ml-4">
          Explore Cities
        </h2>
      </div>

      <Citiescard />

      <div className="flex justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mt-12 px-1 text-center">
          Out There, Go Explore
        </h2>
      </div>

      <Carousels />

      <div className="flex justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mt-12 px-1 text-center">
          Frequently Asked Questions
        </h2>
      </div>

      <Queries />
    </div>
  );
};

export default Home;
