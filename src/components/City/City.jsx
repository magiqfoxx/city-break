import React, { Component } from "react";

import ErrorBoundary from "../ErrorBoundary";
import CityPure from "./CityPure";

import { getCityData, getLocation } from "./helpers.js";

/* Add: local news, booking com airbnb? flights */
class City extends Component {
  //Location is where Client is
  //Destination what they've put in the search

  state = {};

  setCityData = async () => {
    const city = await getCityData(this.props.match.params.city);
    this.setState({ city });
  };
  setLocation = async () => {
    const location = await getLocation();
    this.setState({
      originLat: location.coords.latitude,
      originLng: location.coords.longitude
    });
  };
  componentDidMount() {
    //this.props.match.params.city comes from the router /city/:city
    this.setState({ cityName: this.props.match.params.city });
    this.setCityData();
    this.setLocation();
  }

  render() {
    return (
      <ErrorBoundary>
        <CityPure
          city={this.state.city}
          cityName={this.state.cityName}
          originLat={this.state.originLat}
          originLng={this.state.originLng}
        />
      </ErrorBoundary>
    );
  }
}

export default City;
