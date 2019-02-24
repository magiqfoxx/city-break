import React, { Component } from "react";
import googlePlaces from "./api/googlePlaces";
import LandmarkSlate from "./LandmarkSlate";

class Landmarks extends Component {
  state = {};

  lat = this.props.cityLAT;
  lng = this.props.cityLNG;

  getPOI = allLandmarks => {
    let landmarks = allLandmarks.data.results;
    let newLandmarks = [];
    for (let landmark of landmarks) {
      if (
        landmark.types.includes("point_of_interest") &&
        !landmark.types.includes("travel_agency") &&
        landmark.rating > 4
      ) {
        newLandmarks.push(landmark);
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
        return (
          <LandmarkSlate
            landmark={landmark}
            key={i}
            photoRef={landmark.photos[0].photo_reference || null}
          />
        );
      });
    } else {
      return "Loading...";
    }
  };
  render() {
    return (
      <div className="component component--landmarks">
        <h3>Landmarks</h3>
        <div className="component--landmarks--list">{this.renderContent()}</div>
      </div>
    );
  }
}

export default Landmarks;
