import React, { Component } from "react";
import googlePlacesPhoto from "./api/googlePlacesPhoto";

class LandmarkSlate extends Component {
  state = {};
  photo;
  /*getPhoto = async () => {
    const response = await googlePlacesPhoto.get("", {
      params: {
        photoreference: this.props.photoRef,
        maxwidth: 300
      }
    });

    this.setState({ photo: response.data });
    return response;
  };*/
  componentWillMount = () => {
    if (this.props.photoRef) {
      //this.photo = this.getPhoto();
      this.photo = this.props.landmark.icon;
    } else {
      this.photo = this.props.landmark.icon;
    }
  };
  render() {
    return (
      <div className="component--landmark">
        <h3>{this.props.landmark.name}</h3>
        <img src={this.photo} alt={this.props.landmark.name} />
        <h4>{this.props.landmark.rating}</h4>
      </div>
    );
  }
}

export default LandmarkSlate;
