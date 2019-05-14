import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector("#root")
);
