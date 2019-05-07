import React from "react";

const OneNews = props => {
  return (
    <div className="component--one-news">
      <h3>
        <a href={props.news.url}>{props.news.title}</a>
      </h3>
      <h4>
        {props.news.source.name} - {props.news.publishedAt}
      </h4>
      <img src={props.news.urlToImage} alt={props.news.title} />
      <p>{props.news.description}</p>
    </div>
  );
};

export default OneNews;
