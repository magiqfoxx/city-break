import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Home from "./components/Home";
import City from "./components/City";
import About from "./components/About";
import Contact from "./components/Contact";
import Partners from "./components/Partners";
import Terms from "./components/Terms";
import Page404 from "./Page404";

const Routing = () => {
  const onFormSubmit = async city => {
    this.setState({ city });
    this.props.history.push(`/city/${city}`); //redirects to /city/term

    /*const cityResponse = await geoDB.get("", {
      params: {
        namePrefix: city
      }
    });*/
    //const countryResponse = await cities.get(`/${city}`, {});
    //response.data.0.currencies / languages / regions / timezones
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home onFormSubmit={onFormSubmit} />}
        />
        <Route path="/city/:city" component={City} />
        <Route path="/about-us/" component={About} />
        <Route path="/partners" component={Partners} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms-of-use" component={Terms} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

export default withRouter(Routing);
