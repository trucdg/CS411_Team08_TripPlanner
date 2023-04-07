import "./CurrWeatherThumbnails.css";

const CurrWeatherThumbNails = ({
  cityName,
  temp,
  humidity,
  weatherDescription,
}) => {
  return (
    <div className="weather-thumbnail-cont">
      <p>
        TripPlanner uses data from the
        <a href="https://openweathermap.org/" target="_blank">
          OpenWeather API
        </a>
      </p>
      <ul className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <li className="card">
          <h4>{cityName}</h4>
        </li>
        <li className="card">
          <h4>{temp}</h4>
        </li>
        <li className="card">
          <h4>{humidity}</h4>
        </li>
        <li className="card">
          <h4>{weatherDescription}</h4>
        </li>
      </ul>
    </div>
  );
};

export default CurrWeatherThumbNails;
