import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  //useParams,
} from "react-router-dom";
import Food from "./Food.js";
import Transport from "./Transport.js";
import Home from "./Home.js";
import Stuff from "./Stuff.js";

export default function Survey() {
  let match = useRouteMatch();
  return (
    <Router>
      <div>
        <h2>Categories</h2>

        <ul>
          <li>
            <Link to={`${match.url}/food`}>Food </Link>
          </li>
          <li>
            <Link to={`${match.url}/transport`}>Transport</Link>
          </li>
          <li>
            <Link to={`${match.url}/home`}>Home</Link>
          </li>
          <li>
            <Link to={`${match.url}/stuff`}>Stuff</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/transport">
            <Transport />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/stuff">
            <Stuff />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
