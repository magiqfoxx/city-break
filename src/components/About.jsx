import React from "react";
import Logo from "./Logo";

const About = () => {
  return (
    <React.Fragment>
      <Logo />
      <main className="main">
        We are great and very nice
        <img className="image" src={require("../img/dog.jpg")} alt="dog" />
      </main>
    </React.Fragment>
  );
};

export default About;
