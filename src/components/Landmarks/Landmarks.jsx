import React, { Component } from "react";

import NewLandmarkSlate from "./NewLandmarkSlate";
import Loading from "../Loading";

import { getLandmarksData } from "./helpers.js";

class Landmarks extends Component {
  state = {};

  componentDidMount() {
    this.getLandmarksData(this.props.cityLAT, this.props.cityLNG);
  }

  renderContent = () => {
    if (this.state.landmarks) {
      return this.state.landmarks.slice(0, 4).map(landmark => {
        return <NewLandmarkSlate landmark={landmark} key={landmark} />;
      });
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
