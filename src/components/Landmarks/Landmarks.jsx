import React, { Component } from "react";

import LandmarkSlate from "./LandmarkSlate";
import Loading from "../Loading";

import { getLandmarksData } from "./helpers.js";

class Landmarks extends Component {
  state = {};

  getLandmarks = async () => {
    const landmarks = await getLandmarksData(
      this.props.cityLAT,
      this.props.cityLNG
    );
    landmarks
      ? this.setState({ landmarks })
      : this.setState({ landmarks: "no results" });
  };
  componentDidMount() {
    this.getLandmarks();
  }

  renderContent = () => {
    const landmarks = this.state.landmarks;
    if (landmarks) {
      return landmarks.constructor === Array ? (
        this.state.landmarks.slice(0, 4).map(landmark => {
          return (
            <LandmarkSlate
              landmark={landmark}
              key={landmark.id}
              photoRef={landmark.photos[0].photo_reference}
            />
          );
        })
      ) : (
        <p>No results</p>
      );
    } else {
      return <Loading />;
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
