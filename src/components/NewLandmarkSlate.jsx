import React, { Component } from "react";
import googleSearch from "./api/googleSearch";

class NewLandmarkSlate extends Component {
  state = {};

  getLandmarkImg = async () => {
    try {
      const response = await googleSearch.get("", {
        params: {
          q: this.props.landmark.name
        }
      });
      let src = response.data.items[0].image.thumbnailLink;
      this.setState({ src });
    } catch (error) {
      console.log(error);
    }
  };
  componentWillMount() {
    this.getLandmarkImg();
  }
  renderContent = () => {
    if (this.state.src) {
      return <img src={this.state.src} alt={this.props.landmark.name} />;
    } else {
      return (
        <div className="lds-default">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      );
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

export default NewLandmarkSlate;
