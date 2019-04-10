import React, { Component } from "react";
import googlePlacesPhoto from "./api/googlePlacesPhoto";

class LandmarkSlate extends Component {
  state = {};

  photo;

  getPhoto = async () => {
    try {
      const response = await googlePlacesPhoto.get("", {
        params: {
          photoreference: this.props.photoRef,
          maxwidth: 300
        }
      });
      this.setState({ photo: response });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  componentWillMount = () => {
    if (this.props.photoRef) {
      //this.setState({photo : this.getPhoto()});
      this.photo = this.props.landmark.icon;
    } else {
      this.photo = this.props.landmark.icon;
    }
  };

  render() {
    return (
      <div className="component--landmark">
        <h3>{this.props.landmark.name}</h3>
        <img className="icon" src={this.photo} alt={this.props.landmark.name} />
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
