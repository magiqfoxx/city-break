import React, { Component } from "react";
import metaWeather from "./api/metaWeather";

import WeatherSlate from "./WeatherSlate";

class Weather extends Component {
  state = {};

  getDate = () => {
    let today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.getMonth();
    const dd = today.getDate();
    return yyyy + "/" + mm + "/" + dd;
  };

  getCityData = async () => {
    const stationResponse = await metaWeather.get("/search", {
      //gets information of the station - woeid
      params: {
        lattlong: `${this.props.city.lat}, ${this.props.city.lng}`
      }
    });
    const woeid = stationResponse.data[0].woeid;
    const weatheResponse = await metaWeather.get(`/${woeid}`, {
      params: {
        date: this.getDate()
      }
    });
    this.setState({
      weather0: weatheResponse.data.consolidated_weather[0],
      weather1: weatheResponse.data.consolidated_weather[1],
      weather2: weatheResponse.data.consolidated_weather[2]
    });
  };

  componentWillMount() {
    this.getCityData();
  }

  renderContent = () => {
    if (!this.state.weather0) {
      return "Loading...";
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
