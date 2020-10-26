import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Survey from "./pages/Survey";
import Questions from "./pages/Questions";
import Card from "./pages/Card";
import "./App.css";

export default function App() {
  /*const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");*/

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
            <ul className="navbar-nav ">
              <li className="nav-item px-2">
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink to="/survey" exact>
                  Survey
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/survey/questions" exact>
                  Questions
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
    <div className="container text-center mt-4">
      <Card></Card>
    </div>
  );
}
