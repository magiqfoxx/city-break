import React, { useState, useEffect } from "react";

import geoDB from "./api/geoDB";

const BasicInfo = props => {
  const renderPopulation = population => {
    if (population > 1000000) {
      return (
        Math.floor(population / 1000000) +
        "." +
        Math.floor((population % 1000000) / 10000) +
        "m"
      );
    } else {
      return population / 1000 + "t";
    }
  };
  function addPlus(lng) {
    if (lng[0] !== "+") {
      return `+${lng}`;
    } else {
      return lng;
    }
  }
  const [timeNow, setTimeNow] = useState("");

  const getCityData = async cityName => {
    const cityId = await geoDB.get("cities?", {
      params: {
        limit: 5,
        location: `${props.city.lat}${addPlus(props.city.lng)}`,
        radius: 1000
      }
    });
    let wikiDataIdCity;
    //the first one shows up as the region or sth and doesn't have the country's wikiDataId
    if (cityId.data.data[0].wikiDataId) {
      wikiDataIdCity = cityId.data.data[0].wikiDataId;
    } else {
      wikiDataIdCity = cityId.data.data[1].wikiDataId;
    }

    const time = await geoDB.get(`cities/${wikiDataIdCity}/time`, {});
    setTimeNow(time.data.data);

    const countryId = await geoDB.get(
      `countries?namePrefix=${props.city.countryName}`,
      {}
    );
    const wikiDataIdCountry = countryId.data.data[0].wikiDataId;

    const cityData = await geoDB.get(`countries/${wikiDataIdCountry}`);
  };

  const renderContent = () => {
    if (!props.city || !timeNow) {
      return "Loading...";
    } else {
      return (
        <div className="component component--basic-info">
          <h3>
            <b>Population:</b> {renderPopulation(props.city.population)}
          </h3>
          <h3>
            <b>Region:</b> {props.city.adminName1}
          </h3>

          <h3>Time now: {timeNow.substring(0, 5)}</h3>
        </div>
      );
    }
  };
  useEffect(() => {
    if (props.city) {
      getCityData(props.city.cityName);
    }
  });

  return renderContent();
};

export default BasicInfo;
