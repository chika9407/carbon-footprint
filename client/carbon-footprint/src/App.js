import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams,
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
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
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
          <Route path="/survey/:category">
            {" "}
            <Survey />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <div>Page not found</div>
        </Switch>
      </div>
    </Router>
  );
}

function Food() {
  return <h2>Food</h2>;
}
function Transport() {
  return <h2>Transport</h2>;
}
function Home() {
  return <h2>Home</h2>;
}
function Stuff() {
  return <h2>Stuff</h2>;
}
function Survey() {
  let match = useRouteMatch();}

  return (
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
  );
}
