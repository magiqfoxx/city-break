import React, { Component } from "react";

import ErrorBoundary from "../ErrorBoundary";
import CityPure from "./CityPure";

import { getCity } from "./helpers.js";

/* Add: local news, booking com airbnb? flights */
class City extends Component {
  //Location is where Client is
  //Destination what they've put in the search

  //this.props.match.params.city comes from the router /city/:city
  state = { cityName: this.props.match.params.city };

  componentDidMount() {
    //this.getCityData(this.cityName);
    this.getCityDataFromFile();
    this.getLocation();
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
