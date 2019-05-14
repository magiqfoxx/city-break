import React, { Component } from "react";

import { getPhoto } from "./helpers.js";

class LandmarkSlate extends Component {
  state = {};

  componentDidMount = () => {
    if (this.props.photoRef) {
      this.setState({ photo: getPhoto() });
      //this.photo = this.props.landmark.icon;
    } else {
      this.photo = this.props.landmark.icon;
    }
  };

  render() {
    return (
      <div className="component--landmark">
        <h3>{this.props.landmark.name}</h3>
        <img
          className="icon"
          src={this.state.photo}
          alt={this.props.landmark.name}
        />
        {/*<img
          src={`https://cors-anywhere.herokuapp.com/${this.state.photo}`}
          alt={this.props.landmark.name}
        />*/}
        <h4>{this.props.landmark.rating} &#9734;</h4>
      </div>
    );
  }
}

export default LandmarkSlate;
//https://lh3.googleusercontent.com/p/AF1QipP1YA9UQIq8vgpJQFCfoK9v0jPCBqoxxvDsD8-i=s1600-w300
