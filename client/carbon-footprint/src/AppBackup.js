import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  //useRouteMatch,
  //useParams,
} from "react-router-dom";
import Survey from "./pages/Survey.js";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" exact>
                  Main
                </NavLink>
              </li>
              <li>
                <NavLink to="/survey" exact>
                  Survey{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/survey">
            <Survey />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          <div>Page not found</div>
        </Switch>
      </div>
    </Router>
  );
}
function HomePage() {
  return <h2>HomePage</h2>;
}
