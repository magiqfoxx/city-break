import React, { Component } from "react";

import { getPhoto } from "./helpers.js";

class oldLandmarkSlate extends Component {
  state = {};

  getLandmarkPhoto = async () => {
    //redirecting. usless without backend
    const photo = await getPhoto(this.props.photoRef);
    console.log(photo);
    this.setState({ photo });
  };
  componentDidMount = () => {
    if (this.props.photoRef) {
      this.getLandmarkPhoto();
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

export default oldLandmarkSlate;
//https://lh3.googleusercontent.com/p/AF1QipP1YA9UQIq8vgpJQFCfoK9v0jPCBqoxxvDsD8-i=s1600-w300
