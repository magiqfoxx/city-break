import React from "react";

import Logo from "../Logo";
import BasicInfo from "../BasicInfo/BasicInfo";
import CountryInfo from "../CountryInfo/CountryInfo";
import Landmarks from "../Landmarks/Landmarks";
import Weather from "../Weather/Weather";
import News from "../News/News";
import Flights from "../Flights/Flights";

class CityPure extends React.PureComponent {
  state = { showFlights: false, showNews: false };

  setNews = news => {
    console.log(news);
    this.setState(news);
  };
  render() {
    return (
      <React.Fragment>
        <Logo />
        <main className="main--container">
          <h2 className="city--title">{this.props.cityName}</h2>

          {this.props.city ? (
            <React.Fragment>
              <BasicInfo city={this.props.city} />
              <Weather city={this.props.city} />
              <CountryInfo city={this.props.city} />
              <Landmarks
                cityLAT={this.props.city.lat}
                cityLNG={this.props.city.lng}
              />

              {/*
              Having issues with the flight API
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
              ) : null}*/}
              <button
                className="show-news--button"
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
                  news={this.state.news}
                  setNews={this.setNews}
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
