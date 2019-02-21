import React from "react";
import Logo from "./Logo";

const Partners = () => {
  return (
    <React.Fragment>
      <Logo />
      <main className="main">
        One of our partners{" "}
        <img className="image" src={require("../img/cat.jpg")} alt="cat" />
      </main>
    </React.Fragment>
  );
};

export default Partners;
