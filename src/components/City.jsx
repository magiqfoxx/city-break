import React from "react";
import Logo from "./Logo";

const City = props => {
  //this.props.match.params.city comes from the router /city/:city

  //onMount check if props if no, use props.match...
  return (
    <React.Fragment>
      <Logo />
      {console.log(props.city, props.match.params.city)}
    </React.Fragment>
  );
};

export default City;
