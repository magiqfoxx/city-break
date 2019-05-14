import React, { Component } from "react";
import geckolandmarks from "./api/geckolandmarks";

class Landmarks extends Component {
  state = {};

  lat = this.props.cityLAT;
  lng = this.props.cityLNG;

  getLandmarksData = async () => {
    try {
      const response = await geckolandmarks.get("", {
        params: {
          lat: this.lat,
          lon: this.lng,
          count: 50,
          dist: 3
        }
      });

      const findPIs = () => {
        let landmarks = response.data.landmarks;
        //console.log(response.data.landmarks);
        for (let landmark of landmarks) {
          //console.log(landmark);
          if (
            landmark.subclass === "PI" ||
            landmark.subclass === "CE" ||
            landmark.subclass === "MU" ||
            landmark.subclass === "PL" ||
            landmark.subclass === "RE"
          ) {
            console.log(landmark);
          }
        }
      };
      findPIs();
      this.setState({
        landmarks: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getLandmarksData();
  }

  renderContent = () => {
    if (this.props.city) {
      console.log(this.state.landmarks.view[0].result);
      return <div>Landmarks</div>;
    } else {
      return "Loading...";
    }
  };
  render() {
    return this.renderContent();
  }
}

export default Landmarks;
