import React, { Component } from "react";

import Loading from "../Loading";

import { getLandmarkImg } from "./helpers.js";

class LandmarkSlate extends Component {
  state = {};

  getPhoto = async () => {
    const photo = await getLandmarkImg(this.props.landmark);
    this.setState({ src: photo });
  };
  componentDidMount() {
    this.getPhoto();
  }
  renderContent = () => {
    if (this.state.src) {
      return <img src={this.state.src} alt={this.props.landmark.name} />;
    } else {
      return <Loading />;
    }
  };
  render() {
    return (
      <div className="component--landmark">
        <h3>{this.props.landmark.name}</h3>
        {this.renderContent()}
        <h4>{this.props.landmark.rating} &#9734;</h4>
      </div>
    );
  }
}

export default LandmarkSlate;
