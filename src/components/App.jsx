import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import City from "./City";
import About from "./About";
import Contact from "./Contact";
import Partners from "./Partners";

import "./App.css";

class App extends Component {
  state = {};
  onFormSubmit = term => {
    console.log(term);
  };
  render() {
    return (
      <React.Fragment>
        <div className="background" />
        <div className="body">
          <Nav />
          <Switch>
            <Route path="/city/:city" component={City} />
            <Route path="/about-us" component={About} />
            <Route path="/partners" component={Partners} />
            <Route path="/contact" component={Contact} />
            <Route
              exact
              path="/"
              render={() => <Home onFormSubmit={this.onFormSubmit} />}
            />
          </Switch>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
