import React, { Component } from "react";
import googlePlaces from "./api/googlePlaces";
import { google } from "google-maps-react";

class Landmarks extends Component {
  state = {};

  lat = this.props.cityLAT;
  lng = this.props.cityLNG;

  getLandmarks = () => {
    const cityLocation = new google.maps.LatLng(this.lat, this.lng);

    const request = {
      location: cityLocation,
      radius: 1000
    };
    let service = new google.maps.places.PlacesService(this.map);

    service.nearbySearch(request, (results, status) => {
      console.log(results, status);
    });
  };

  getLandmarksData = async () => {
    try {
      const response = await googlePlaces.get("", {
        params: {
          location: `${this.lat}, ${this.lng}`
        }
      });
      this.setState({
        landmarks: response
      });
    } catch (error) {
      console.log(error);
    }
  };
  componentWillMount() {
    //this.getLandmarksData();
    this.getLandmarks();
  }

  renderContent = () => {
    if (this.props.city) {
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
