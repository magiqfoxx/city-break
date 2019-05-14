import React from "react";

import Logo from "../Logo";
import BasicInfo from "../BasicInfo/BasicInfo";
import CityInfo from "../CountryInfo/CountryInfo";
import Landmarks from "../Landmarks/Landmarks";
import Weather from "../Weather/Weather";
import News from "../News/News";
import Flights from "../Flights/Flights";

class CityPure extends React.PureComponent {
  state = { showFlights: false, showNews: false };

  render() {
    return (
      <React.Fragment>
        <Logo />
        <main className="main--container">
          <h2 className="city--title">{this.props.cityName}</h2>

          <BasicInfo city={this.props.city} />
          {this.props.city ? (
            <React.Fragment>
              <Weather city={this.props.city} />
              <CityInfo city={this.props.city} />
              <Landmarks
                cityLAT={this.props.city.lat}
                cityLNG={this.props.city.lng}
              />
              <button
                onClick={() =>
                  this.setState({
                    showFlights: !this.state.showFlights
                  })
                }
              >
                {!this.state.showFlights ? "Show Flights" : "Hide Flights"}
              </button>
              {this.state.showFlights ? (
                <Flights
                  destinationCity={this.props.city}
                  originLat={this.props.originLat}
                  originLng={this.props.originLng}
                />
              ) : null}
              <button
                onClick={() =>
                  this.setState({
                    showNews: !this.state.showNews
                  })
                }
              >
                {!this.state.showNews ? "Show News" : "Hide News"}
              </button>
              {this.state.showNews ? (
                <News
                  country={this.props.city.countryCode}
                  countryName={this.props.city.countryName}
                />
              ) : null}
            </React.Fragment>
          ) : null}
        </main>
      </React.Fragment>
    );
  }
}

export default CityPure;
