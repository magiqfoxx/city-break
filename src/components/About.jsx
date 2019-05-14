import React from "react";
import Logo from "./Logo";

const About = () => {
  return (
    <React.Fragment>
      <Logo />
      <main className="main--container__other">
        <div className="component component--about">
          <h2>The apis I'm using:</h2>
          <ul>
            <li>
              <a href="http://geodb-cities-api.wirefreethought.com">
                GeoDB for city data{" "}
              </a>
            </li>
            <li>
              <a href="https://developers.google.com/places/web-service/search">
                Google Places for Landmarks
              </a>
            </li>
            <li>
              <a href="https://restcountries.eu">
                REST Countries for data about the country
              </a>
            </li>
            <li>
              <a href="https://www.metaweather.com/api/">
                MetaWeather for weather data
              </a>
            </li>
            <li>
              <a href="cse.google.com">
                Google Search for the pictures of landmarks
              </a>
            </li>
            <li>
              <a href="newsapi.org">NewsApi for news</a>
            </li>
            <li>
              <a href="https://rapidapi.com/user/skyscanner">
                Skyscanner for flights
              </a>
            </li>
            <li>
              <a href="https://aviation-edge.com/developers/">
                Aviation Edge for Airports
              </a>
            </li>
            <li>
              <a href="https://cors-anywhere.herokuapp.com">
                CORS-Anywhere for not being locked out
              </a>
            </li>
          </ul>
        </div>
      </main>
    </React.Fragment>
  );
};

export default About;

/*<img className="image" src={require("../img/dog.jpg")} alt="dog" />*/
