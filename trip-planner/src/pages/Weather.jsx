import classes from "./Weather.module.css";
import CurrWeatherThumbNails from "../components/WeatherPage/CurrWeatherThumbnails";

const Weather = () => {
  let weatherInfo = {
    cityName: "Boston",
    temp: 298,
    humidity: 30,
    weatherDescription: "Light Rain",
  };
  return (
    <div className={classes["weather-content-box"]}>
      <div className={classes["weather-content"]}>
        <h1>Weather Forecast</h1>
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
