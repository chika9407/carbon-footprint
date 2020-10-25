import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  //Link,
  //useParams,
  //useRouteMatch,
} from "react-router-dom";
import Survey from "./pages/Survey";
import Questions from "./pages/Questions";

export default function App() {
  return (
    <div className="App">
      <Router>
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
                  Survey
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path="/survey/questions">
              <Questions />
            </Route>
            <Route exact path="/survey">
              <Survey />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <div>Page not found</div>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>This is the Main Page</h2>
    </div>
  );
}
