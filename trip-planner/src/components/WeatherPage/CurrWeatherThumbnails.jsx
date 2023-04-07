import "./CurrWeatherThumbnails.css";

const CurrWeatherThumbnails = ({
  cityName,
  temp,
  humidity,
  weatherDescription,
}) => {
  return (
    <div className="weather-thumbnail-cont">
      <ul className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <li className="card">
          <h4>{cityName}</h4>
        </li>
        <li className="card">
          <h4>
            <i class="fa-solid fa-temperature-low"> {temp} &#8451; </i>
          </h4>
        </li>
        <li className="card">
          <h4>{humidity}% Humid</h4>
        </li>
        <li className="card">
          <h4>{weatherDescription}</h4>
        </li>
      </ul>
    </div>
  );
};

export default CurrWeatherThumbnails;
