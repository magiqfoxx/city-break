import React, { Component } from "react";

import Loading from "../Loading";

import { renderPopulation, getCountryData } from "./helpers.js";

class CityInfo extends Component {
  state = {};

  getCountryInfo = async () => {
    const countryData = await getCountryData(this.props.city);
    console.log(countryData);
    this.setState(countryData);
  };
  componentDidMount() {
    this.getCountryInfo();
  }
  renderComponent = () => {
    if (!this.props.city || !this.state.capital) {
      return <Loading />;
    } else {
      return (
        <div className="component component--country-info">
          <img
            src={this.state.flag2}
            className="flag"
            alt={`flag of ${this.props.city.countryName}`}
          />
          <h3>Country: {this.props.city.countryName}</h3>
          <h3>Capital: {this.state.capital}</h3>
          <h3>Population: {renderPopulation(this.state.countryPopulation)}</h3>
          <h3>Language: {this.state.language}</h3>
          <h3>
            Currency: {this.state.currencySymbol} ({this.state.currencyName})
          </h3>
          <h3>Region: {this.state.region}</h3>
          <h3>Calling code: {this.state.callingCode}</h3>
          <h3>Gini Index: {this.state.gini}</h3>
        </div>
      );
    }
  };
  render() {
    return this.renderComponent();
  }
}

export default CityInfo;
