import React, { Component } from "react";
import googlePlaces from "./api/googlePlaces";
import LandmarkSlate from "./LandmarkSlate";

class Landmarks extends Component {
  state = {};

  lat = this.props.cityLAT;
  lng = this.props.cityLNG;

  getPOI = allLandmarks => {
    let landmarks = allLandmarks.data.results;

    for (let landmark of landmarks) {
      let newLandmarks = [];

      if (
        landmark.types.includes("point_of_interest") &&
        !landmark.types.includes("travel_agency")
      ) {
        console.log(landmark);
        newLandmarks.push(landmark);
        console.log(newLandmarks);
      }

      this.setState({ landmarks: newLandmarks });
    }
  };

  getLandmarksData = async () => {
    try {
      const response = await googlePlaces.get("", {
        params: {
          location: `${this.lat},${this.lng}`,
          rankby: "prominence",
          keyword: "must see"
        }
      });

      this.getPOI(response);
    } catch (error) {
      console.log(error);
    }
  };
  componentWillMount() {
    this.getLandmarksData();
  }

  renderContent = () => {
    if (this.state.landmarks) {
      return this.state.landmarks.slice(0, 4).map((landmark, i) => {
        return <LandmarkSlate landmark={landmark} key={i} />;
      });
    } else {
      return "Loading...";
    }
  };
  render() {
    return (
      <div className="component component--landmarks">
        {this.renderContent()}
      </div>
    );
  }
}

export default Landmarks;
