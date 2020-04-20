import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./apps/Main/index";
import store from "./store";

const app = document.getElementById("app");

window.routes = [
  { path: "/", component: Layout },
];

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {window.routes.map(({ path, component }, key) => (
        <Route exact path={path} component={component} key={key} />
      ))}
    </Router>
  </Provider>,
  app
);
