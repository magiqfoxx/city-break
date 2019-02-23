import React from "react";

const LandmarkSlate = props => {
  return (
    <div className="component--landmark">
      <h3>{props.landmark.name}</h3>
      <img src={props.landmark.icon} alt={props.landmark.name} />
      <h4>{props.landmark.rating}</h4>
    </div>
  );
};

export default LandmarkSlate;
