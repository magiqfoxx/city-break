import React from "react";

const WeatherSlate = props => {
  const temp = Math.round(props.weather.the_temp) + "°C";
  return (
    <React.Fragment>
      <div className="component--weather">
        <img
          src={`http://www.metaweather.com/static/img/weather/${
            props.weather.weather_state_abbr
          }.svg`}
          alt={`${props.weather.weather_state_name}`}
        />
        {temp}
      </div>
    </React.Fragment>
  );
};

export default WeatherSlate;
