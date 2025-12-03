import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import PopularCities from "./components/PopularCities";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const API_KEY = "76099c2016c13b2dcdd012e6d51f5f64";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found. Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full px-4">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-300">
            <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent">
              ☀️ Weather App
            </h1>
            <p className="text-center text-gray-700 mb-6">
              Discover weather around the world
            </p>
            <SearchBar fetchWeather={fetchWeather} />
            {loading && (
              <div className="text-center mt-6">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800"></div>
                <p className="text-gray-700 mt-2">Loading weather data...</p>
              </div>
            )}
            {error && (
              <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-xl text-gray-800 text-center">
                {error}
              </div>
            )}
            {weather && <WeatherCard weather={weather} />}
          </div>
        </div>
        <PopularCities />
      </div>
    </div>
  );
}

export default App;
