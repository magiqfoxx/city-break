import React, { Component } from "react";

import Loading from "../Loading";
import { getDate, getPort, getNearestAirport, getQuotes } from "./helpers";

import aiports from "./aviationResponse";
import ports from "./getPortsResponse";
import quotes from "./quotesResponse";
import quotesResponse from "./quotesResponse";

//you can use skyscanner port search with query= country name to get all airports in that country
//and then provide a list for user to choose from
//and use that to query for quotes

class Flights extends Component {
  state = {};

  getAirports = () => {
    //gets airport closest to location
    const getDestinationAirport = getNearestAirport(
      this.props.destinationCity.lat,
      this.props.destinationCity.lng
    );

    const getOriginAirport = getNearestAirport(
      this.props.originCityLat,
      this.props.originCityLng
    );
  };
  getAirportsFromFile = () => {
    this.setState({
      destinationAirport: aiports[0],
      originAirport: aiports[1]
    });
  };
  getPorts = async () => {
    //this is specific to skyscanner
    const destinationPort = getPort(
      await this.props.destinationCity,
      await this.state.destinationAirport
    );

    const originPort = getPort(this.props.originCity, this.state.originAirport);
  };
  getPortsFromFile = async () => {
    this.setState({
      destinationPort: ports.Places[0],
      originPort: ports.Places[1]
    });
  };
  getQuotes = () => {
    const quotes = getQuotes(
      this.state.destinationPort,
      this.state.originPort,
      this.state.date
    );
    this.setState({ quotes });
  };
  getQuotesFromFile = () => {
    const quotes = quotesResponse.Quotes[0];
    quotes
      ? this.setState({ quotes })
      : this.setState({ quotes: "no results" });
  };
  getData = async () => {
    await this.getAirportsFromFile();
    await this.getPortsFromFile();
    this.getQuotesFromFile();
  };

  componentDidMount() {
    this.setState({ date: getDate() });
    this.getData();
  }
  renderComponent = () => {
    if (!this.state.quotes) {
      return (
        <React.Fragment>
          <Loading />
          <p>
            Make sure you are using the{" "}
            <a href="https://katcodes.com">https://katcodes.com</a> address and
            allowing geoLocation.
          </p>
        </React.Fragment>
      );
    } else {
      return (
        <div className="component component--city-info component--basic-info">
          {this.state.quotes}
        </div>
      );
    }
  };
  render() {
    return this.renderComponent();
  }
}

export default Flights;
