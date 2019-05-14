import React, { Component } from "react";

import OneNews from "./OneNews";
import Loading from "../Loading";

import { getNews } from "./helpers.js";

class News extends Component {
  state = {};

  componentDidMount() {
    this.setState({ news: getNews(this.props.country) });
  }

  renderContent = () => {
    if (this.state.news) {
      return this.state.news.slice(0, 4).map(news => {
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
