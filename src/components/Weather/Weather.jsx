import React, { Component } from "react";

import WeatherSlate from "./WeatherSlate";
import Loading from "../Loading";

import { getWeather } from "./helpers.js";

class Weather extends Component {
  state = {};

  getWeather = async () => {
    const weathers = await getWeather(this.props.city.lat, this.props.city.lng);
    this.setState({
      weather0: weathers[0],
      weather1: weathers[1],
      weather2: weathers[2]
    });
  };
  componentDidMount() {
    this.getWeather();
  }

  renderContent = () => {
    if (!this.state.weather0) {
      return <Loading />;
    } else {
      return (
        <div className="component component--weathers">
          <WeatherSlate day="Today" weather={this.state.weather0} />
          <WeatherSlate day="Tomorrow" weather={this.state.weather1} />
          <WeatherSlate day="The next day" weather={this.state.weather2} />
        </div>
      );
    }
  };
  render() {
    return this.renderContent();
  }
}

export default Weather;
