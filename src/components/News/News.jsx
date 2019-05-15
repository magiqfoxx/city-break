import React, { Component } from "react";

import OneNews from "./OneNews";
import Loading from "../Loading";

import { getNewsData } from "./helpers.js";

class News extends Component {
  state = {};

  getNews = async () => {
    const news = await getNewsData(this.props.country);
    this.props.setNews({ news });
    //this.setState({ news });
  };
  componentDidMount() {
    //avoid sending API request every time user clicks the button
    //DOESN'T WORK
    if (!this.props.news) {
      this.getNews();
    }
  }
  renderContent = () => {
    if (this.props.news) {
      return this.props.news.slice(0, 4).map(news => {
        return <OneNews news={news} key={news.title} />;
      });
    } else {
      return <Loading />;
    }
  };
  render() {
    return (
      <div className="component component--news">
        <h3>News from {this.props.countryName}</h3>
        {this.renderContent()}
      </div>
    );
  }
}

export default News;
