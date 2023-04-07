import classes from "./Weather.module.css";

const Weather = () => {
  return (
    <div className={classes["weather-content-box"]}>
      <div className={classes["weather-content"]}>
        <h1>Weather Forecast</h1>
      </div>
    </div>
  );
};

export default Weather;
