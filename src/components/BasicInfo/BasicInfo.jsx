import React, { useState, useEffect } from "react";

import Loading from "../Loading";
import { renderPopulation, addPlus, getCityTime } from "./helpers.js";

const BasicInfo = props => {
  //HOOKS
  const [timeNow, setTimeNow] = useState("");

  const renderContent = () => {
    if (!props.city || !timeNow) {
      return <Loading />;
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
      getCityTime(props.city);
    }
  }, [props.city]);

  return renderContent();
};

export default BasicInfo;
