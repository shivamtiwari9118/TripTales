import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { PageNotFound } from "./pages/PageNotFound";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import Navbar from "./pages/Navbar";
import { Pricing } from "./pages/Pricing";
import { Footer } from "./pages/Footer";
import CityDetails from "./city/[cityid]";
import GenerateTrip from "./generate-trip/GenerateTrip";
import FinalTrip from "./trip/[tripid]";
import AllTours from "./alltours/AllTours";

function App() {
  const { isLoaded, isSignedIn } = useUser();
  let navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn && isLoaded) {
      navigate("/auth");
    }
  }, [isSignedIn, isLoaded, navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/alltours" element={<AllTours />} />
        <Route path="/city/:cityid" element={<CityDetails />} />
        <Route path="/generatetrip" element={<GenerateTrip />} />
        <Route path="/trip/:tripid" element={<FinalTrip />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
