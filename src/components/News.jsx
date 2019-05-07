import React, { Component } from "react";

import newsApi from "./api/newsApi";

import OneNews from "./OneNews";

class News extends Component {
  state = {};
  getNews = async () => {
    try {
      const response = await newsApi.get("", {
        params: {
          country: this.props.country
        }
      });
      this.setState({ news: response.data.articles });
    } catch (error) {
      console.log(error);
    }
  };
  componentWillMount() {
    this.getNews();
  }

  renderContent = () => {
    if (this.state.news) {
      return this.state.news.slice(0, 4).map((news, i) => {
        return <OneNews news={news} key={i} />;
      });
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
      <div className="component component--news">
        <h3>News from {this.props.countryName}</h3>
        {this.renderContent()}
      </div>
    );
  }
}

export default News;
