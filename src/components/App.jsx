import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import City from "./City";
import About from "./About";
import Contact from "./Contact";
import Partners from "./Partners";
import Terms from "./Terms";

import "./App.css";

class App extends Component {
  state = {};
  onFormSubmit = async city => {
    this.props.history.push(`/city/${city}`); //redirects to /city/term

    /*const cityResponse = await geoDB.get("", {
      params: {
        namePrefix: city
      }
    });*/
    //const countryResponse = await cities.get(`/${city}`, {});
    //response.data.0.currencies / languages / regions / timezones
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
            <Route path="/terms-of-use" component={Terms} />
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

export default withRouter(App);
