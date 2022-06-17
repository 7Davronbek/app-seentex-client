import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";
import { HashRouter, Route, Switch } from "react-router-dom";
import Admin from "./components/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/admin" exact component={Admin} />
      </Switch>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
