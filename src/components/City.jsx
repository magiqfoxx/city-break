import React, { Component } from "react";
import geoNames from "./api/geoNames";
import Logo from "./Logo";
import BasicInfo from "./BasicInfo";
import CityInfo from "./CountryInfo";
import Landmarks from "./Landmarks";
import Weather from "./Weather";
import News from "./News";

/* Add: local news, booking com airbnb? flights */
class City extends Component {
  state = {};

  //this.props.match.params.city comes from the router /city/:city
  cityName = this.props.match.params.city;

  componentWillMount() {
    this.getCityData(this.cityName); //search is made from term in address bar
  }

  getCityData = async city => {
    const cityResponse = await geoNames.get("", {
      params: {
        q: city
      }
    });
    this.setState({
      city: cityResponse.data.geonames[0]
    });
  };

  render() {
    return (
      <React.Fragment>
        <Logo />
        <main className="main--container">
          <h2 className="city--title">{this.cityName}</h2>
          <BasicInfo city={this.state.city} />
          {this.state.city ? (
            <React.Fragment>
              <Weather city={this.state.city} />
              <CityInfo city={this.state.city} />
              <Landmarks
                cityLAT={this.state.city.lat}
                cityLNG={this.state.city.lng}
              />
              <News
                country={this.state.city.countryCode}
                countryName={this.state.city.countryName}
              />
            </React.Fragment>
          ) : null}
        </main>
      </React.Fragment>
    );
  }
}

export default City;
