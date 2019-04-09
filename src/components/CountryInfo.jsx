import React, { Component } from "react";

import restCountries from "./api/rest-countries";

class CityInfo extends Component {
  state = {};
  //<img src="data:image/svg+xml;utf8,<svg ... > ... </svg>" />
  renderPopulation = population => {
    if (population > 1000000) {
      return (
        Math.floor(population / 1000000) +
        "." +
        Math.floor((population % 1000000) / 10000) +
        "m"
      );
    } else {
      return population / 1000 + "t";
    }
  };
  getCountryData = async cityName => {
    await restCountries
      .get(`${this.props.city.countryName}`, {})
      .then(response => {
        let data = response.data[0];

        this.setState({
          currencyName: data.currencies[0].name,
          currencySymbol: data.currencies[0].symbol,
          countryData: data,
          callingCode: data.callingCodes,
          capital: data.capital,
          flag2: data.flag,
          gini: data.gini,
          language: data.languages[0].name,
          countryPopulation: data.population,
          region: data.region
        });
      });
  };
  componentWillMount() {
    this.getCountryData(this.props.city.cityName);
  }
  renderComponent = () => {
    if (!this.props.city || !this.state.capital) {
      return "Loading...";
    } else {
      return (
        <div className="component component--city-info component--basic-info">
          <img src={this.state.flag2} className="flag" />
          <h3>Country: {this.props.city.countryName}</h3>
          <h3>Capital: {this.state.capital}</h3>
          <h3>
            Population: {this.renderPopulation(this.state.countryPopulation)}
          </h3>
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
