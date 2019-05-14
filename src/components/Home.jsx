import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

const Home = props => {
  const onFormSubmit = term => {
    props.onFormSubmit(term);
  };
  return (
    <main>
      <div className="title logo">
        <Link to="/">City Break</Link>
      </div>
      <p>hi</p>
      <hr />
      <div className="sub-title">Where do you want to go?</div>
      <SearchBar onFormSubmit={onFormSubmit} />
    </main>
  );
};

export default Home;
