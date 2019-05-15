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

  //aviation-edge gives nonsense response for a location
  //works for France, but maybe not Poland?
  //gives back Brighton, UK(?) as nearest airports/stations - tested on the website too

  getDestinationAirport = async () => {
    const destinationAirport = await getNearestAirport(
      this.props.destinationCity.lat,
      this.props.destinationCity.lng
    );
    this.setState({ destinationAirport });
    this.getDestinationPort();
  };
  getOriginAirport = async () => {
    const originAirport = await getNearestAirport(
      this.props.originCityLat,
      this.props.originCityLng
    );
    this.setState({ originAirport });
    console.log(originAirport);
    //this.getOriginPort();
  };

  getDestinationPort = async () => {
    const destinationPort = await getPort(
      await this.props.destinationCity,
      await this.state.destinationAirport
    );
    this.setState({ destinationPort });
  };

  getOriginPort = async () => {
    const originPort = await getPort(
      this.props.originCity,
      this.state.originAirport
    );
    this.setState({ originPort });
  };

  //This is not finished since i couldn't reliably get airports
  getQuotes = async () => {
    const quotes = await getQuotes(
      this.state.destinationPort,
      this.state.originPort,
      this.state.date
    );
    quotes
      ? this.setState({ quotes })
      : this.setState({ quotes: "no results" });
  };

  getData = async () => {
    //this is not ideal
    //await this.getDestinationAirport();
    //await this.getOriginAirport();
    //this.getQuotes();
  };

  componentDidMount() {
    this.setState({ date: getDate() });
    //avoid sending API request every time component is mounted = user clicks 'show flights'
    if (!this.state.originAirport || !this.state.destinationAirport) {
      this.getData();
    }
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

{
  /*  FOR TESTING PURPOSES
   getAirportsFromFile = () => {
    this.setState({
      destinationAirport: aiports[0],
      originAirport: aiports[1]
    });
  }; 
  getPortsFromFile = async () => {
    this.setState({
      destinationPort: ports.Places[0],
      originPort: ports.Places[1]
    });
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
*/
}
