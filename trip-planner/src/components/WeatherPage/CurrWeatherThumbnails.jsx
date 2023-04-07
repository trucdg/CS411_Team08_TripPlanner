const CurrWeatherThumbNails = ({
  cityName,
  temp,
  humidity,
  weatherDescription,
}) => {
  return (
    <div className="d-flex">
      <ul>
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
