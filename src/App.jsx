import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import City from "./components/City";
import About from "./components/About";
import Contact from "./components/Contact";
import Partners from "./components/Partners";
import Terms from "./components/Terms";
import Page404 from "./Page404";
import Footer from "./components/Footer";
import Routing from "./Routing";

import "./App.css";

class App extends Component {
  state = {};
  onFormSubmit = async city => {
    this.setState({ city });
    this.props.history.push(`/city/${city}`);
  };

  render() {
    return (
      <React.Fragment>
        <div className="background" />
        <div className="body">
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home onFormSubmit={this.onFormSubmit} />}
            />
            <Route path="/city/:city" component={City} />
            <Route path="/about-us/" component={About} />
            <Route path="/partners" component={Partners} />
            <Route path="/contact" component={Contact} />
            <Route path="/terms-of-use" component={Terms} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
