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
      return (
        population.substring(0, population.length - 3) +
        "." +
        population.substring(population.length - 3)
      );
    }
  };
  function addPlus(lng) {
    if (lng[0] !== "-") {
      return `+${lng}`;
    } else {
      return lng;
    }
  }
  //HOOKS
  const [timeNow, setTimeNow] = useState("");
  const [countryData, setCountryData] = useState({});

  const getCityTime = async cityName => {
    try {
      const GeoDBCityId = await geoDB.get("cities?", {
        params: {
          limit: 5,
          location: `${props.city.lat}${addPlus(props.city.lng)}`,
          radius: 1000
        }
      });
      const id = GeoDBCityId.data.data[0].id;
      const time = await geoDB.get(`cities/${id}/time`);
      setTimeNow(time.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCountryId = async countryName => {
    //do I need this for anything?
    try {
      const countryId = await geoDB.get(
        `countries?namePrefix=${props.city.countryName}`
      );
      const wikiDataIdCountry = countryId.data.data[0].wikiDataId;
      const data = await geoDB.get(`countries/${wikiDataIdCountry}`);
      setCountryData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderContent = () => {
    if (!props.city || !timeNow) {
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
    if (props.city && !timeNow) {
      getCityTime(props.city.cityName);
      getCountryId(props.city.countryName);
    }
  }, [props.city]);

  return renderContent();
};

export default BasicInfo;
