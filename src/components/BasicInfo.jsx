import React from "react";

const BasicInfo = props => {
  const renderContent = () => {
    if (props.city === undefined) {
      return "Loading...";
    } else {
      return (
        <div className="component component--basic-info">
          <h3>
            <b>Country:</b> {props.city.countryName}
          </h3>
          <h3>
            <b>Region:</b> {props.city.adminName1}
          </h3>
          <h3>
            <b>Population:</b> {props.city.population}
          </h3>
        </div>
      );
    }
  };
  return renderContent();
};

export default BasicInfo;
