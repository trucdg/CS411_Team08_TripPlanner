import { useState } from "react";
import classes from "./Weather.module.css";
import CurrWeatherThumbNails from "../components/WeatherPage/CurrWeatherThumbnails";

const Weather = () => {
  let weatherInfo = {
    cityName: "NYC",
    temp: 298,
    humidity: 30,
    weatherDescription: "Light Rain",
  };

  // initially, the default location is New York City
  const [lat, setLat] = useState("40.758896");
  const [long, setLong] = useState("-73.985130");

  // we use the Navigator interface from the browser API to get geolocation info
  let geolocationAPI = navigator.geolocation;

  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      alert("Oops! Geolocation API is not available! Default location to NYC.");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLong(coords.longtitude);
        },
        (error) => {
          alert("Something went wrong when getting your position!");
        }
      );
    }
  };

  getUserCoordinates();

  return (
    <div className={classes["weather-content-box"]}>
      <div className={classes["weather-content"]}>
        <h1>Weather Forecast</h1>
        <p>
          TripPlanner uses data from the
          <a href="https://openweathermap.org/" target="_blank">
            OpenWeather API
          </a>
        </p>
        <div className={classes["location-form"]}>
          <form>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Latitude"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Longtitude"
                />
              </div>
            </div>
            <button type="submit" className={classes["search-weather-btn"]}>
              Search Weather
            </button>
          </form>
        </div>
        <CurrWeatherThumbNails
          cityName={weatherInfo.cityName}
          temp={weatherInfo.temp}
          humidity={weatherInfo.humidity}
          weatherDescription={weatherInfo.weatherDescription}
        />
      </div>
    </div>
  );
};

export default Weather;
