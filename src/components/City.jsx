import React, { Component } from "react";
import geoNames from "./api/geoNames";
import Logo from "./Logo";
import BasicInfo from "./BasicInfo";
import Landmarks from "./Landmarks";
import Map from "./Map";
import Weather from "./Weather";

class City extends Component {
  state = {};
  //this.props.match.params.city comes from the router /city/:city
  cityName = this.props.match.params.city;

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
  componentWillMount() {
    this.getCityData(this.cityName); //search is made from term in address bar
  }

  render() {
    return (
      <React.Fragment>
        <Logo />
        <main className="main">
          <h2 className="main--title">{this.cityName}</h2>
          <BasicInfo city={this.state.city} />
          {this.state.city ? <Weather city={this.state.city} /> : null}
        </main>
      </React.Fragment>
    );
  }
}

export default City;
