import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //NavLink,
  //Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  //let category = useParams();
  let { path, url } = useRouteMatch();
  const [answers, setAnswers] = useState([]);
  const [toNext, setToNext] = useState(false);
  //const [category] = useState(["food", "transport", "home", "stuff"]);

  useEffect(() => {
    document.title = "Questionnaire";
  });
  useEffect(() => {
    async function fetchQuestionsByCategory(category) {
      const response = await fetch("/category/" + category + "/questions/");
      const json = await response.json();
      setQuestions(json);
    }
    fetchQuestionsByCategory("food");
  }, [questions]);

  useEffect(() => {
    async function fetchOptionsByQuestionID(QuestionId) {
      const response = await fetch("/questions/" + QuestionId + "/options/");
      const json = await response.json();
      setOptions(json);
    }
    fetchOptionsByQuestionID(1);
  }, [options]);

  //grab the category and apply the 1st fetch method to it, and apply the 2nd fech method by looping through the options
  //fetchQuestionsByCategory({ type });
  //fetchOptionsByQuestionID(1);
  //const option = document.querySelector("label");
  //console.log(option);
  //option.forEach((e) => this.fetchOptionsByQuestionID(e));
  //;
  //});

  /*addAnswersByOptionID(response) {
    this.setState({ ...answers, response });
    console.log(this.state.answers);
  }*/

  return (
    <div className="container">
      <h3>Click Next to continue to the next question</h3>
      <form>
        <ol>
          {questions.map((e) => (
            <li key={e.id} className="text-center">
              {e.Title}
              {options.map((e) => (
                <div className="form-check">
                  <input
                    onChange={(event) => setAnswers(event.target.value)}
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value={options}
                    checked
                  />
                  <label
                    key={e.QuestionId}
                    className="form-check-label"
                    for="exampleRadios1"
                  >
                    {e.OptionText}
                  </label>
                </div>
              ))}
            </li>
          ))}
        </ol>
        <button onClick={() => setToNext(true)} className="btn btn-primary">
          Next
        </button>
        <div>
          {toNext ? <Redirect to="/survey/questions/transport" /> : null}
        </div>
      </form>
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/survey/questions/:category">
                <Category />
              </Route>
              <Route exact path={`${path}/:category`}>
                <Category />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

function Category() {
  let { category } = useParams();
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
}
