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
import Option from "./pages/Option.js";

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
              <li>
                <NavLink to="/questions" exact>
                  Questions{" "}
                </NavLink>
              </li>
              <NavLink to="/options" exact>
                Options{" "}
              </NavLink>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/survey">
            <Survey />
          </Route>
          <Route path="/questions/:id">
            {" "}
            <Questions />
          </Route>
          <Route path="/options">
            <Option />
          </Route>
          <Route path="/options/:id">
            <Option />
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
function Options() {
  return <h2>Options</h2>;
}
function Questions() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Questions</h2>

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

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}

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
      </Switch>
    </div>
  );
}

/*function Question() {
  let { questionId } = useParams();
  return <h3>Requested question ID: {questionId}</h3>;
          <Route path={match.path}>
          <h3>Please select a question category.</h3>
        </Route>
      </Switch>
}*/
