import { useState } from "react";
import classes from "./Weather.module.css";
import CurrWeatherThumbnails from "../components/WeatherPage/CurrWeatherThumbnails";

const Weather = () => {
  let weatherInfo = {
    cityName: "NYC",
    temp: 298,
    humidity: 30,
    weatherDescription: "Light Rain",
  };

  // initially, the default location is New York City
  const [enteredLat, setLat] = useState("");
  const [enteredLong, setLong] = useState("");
  const [coordinates, setCoordinates] = useState({});

  // we use the Navigator interface from the browser API to get geolocation info
  let geolocationAPI = navigator.geolocation;

  //   const getUserCoordinates = () => {
  //     if (!geolocationAPI) {
  //       alert("Oops! Geolocation API is not available! Default location to NYC.");
  //       //   setLat(40.758896);
  //       //   setLong(-73.98513);
  //     } else {
  //       geolocationAPI.getCurrentPosition(
  //         (position) => {
  //           const { coords } = position;
  //           setLat(coords.latitude);
  //           setLong(coords.longitude);
  //         },
  //         (error) => {
  //           alert("Something went wrong when getting your position!");
  //         }
  //       );
  //     }
  //   };

  //   getUserCoordinates();

  const latChangeHandler = (event) => {
    setLat(event.target.value);
  };

  const longChangeHandler = (event) => {
    setLong(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let submittedCoordinates = {
      lat: enteredLat,
      long: enteredLong,
    };
    console.log(submittedCoordinates);
  };

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
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col">
                <label>
                  Latitude
                  <input
                    type="text"
                    value={enteredLat}
                    className="form-control"
                    placeholder="Latitude"
                    onChange={latChangeHandler}
                  />
                </label>
              </div>
              <div className="col">
                <label>
                  Longtitude
                  <input
                    type="text"
                    value={enteredLong}
                    className="form-control"
                    placeholder="Longtitude"
                    onChange={longChangeHandler}
                  />
                </label>
              </div>
            </div>
            <button type="submit" className={classes["search-weather-btn"]}>
              Search Weather
            </button>
          </form>
        </div>
        <CurrWeatherThumbnails
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
