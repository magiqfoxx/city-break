import React from "react";
import Logo from "./Logo";

const Contact = () => {
  return (
    <React.Fragment>
      <Logo />
      <main className="main">
        To contact please scream LOUDLY!
        <img className="image" src={require("../img/woods.jpg")} alt="woods" />
      </main>
    </React.Fragment>
  );
};

export default Contact;
