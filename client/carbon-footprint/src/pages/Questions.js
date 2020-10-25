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
//import Pagination from "./Pagination";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [categories] = useState(["food", "transport", "home", "stuff"]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(24);

  let { path, url } = useRouteMatch();
  const [toNext, setToNext] = useState(false);

  useEffect(() => {
    document.title = "Questionnaire";
  });

  useEffect(() => {
    async function fetchQuestionsByCategory(category) {
      const response = await fetch("/category/" + category + "/questions/");
      const json = await response.json();
      setQuestions(json);
    }
    if (!questions.length) fetchQuestionsByCategory(currentCategory);
  }, [questions]);

  const setNextCategory = () => {
    let i = categories.indexOf(currentCategory);
    if (i >= 0 && i < categories.length) {
      setCurrentCategory(categories[i + 1]);
    }
  };

  useEffect(() => {
    async function fetchOptions() {
      const response = await fetch("/options/");
      const json = await response.json();
      setOptions(json);
      console.log(options);
    }
    if (!options.length) fetchOptions();
  }, [options]);

  const handleSelect = (id) => {
    setAnswers([...answers, id]);
  };

  //get Current Qs for further pagination

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  /*const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };*/

  return (
    <div className="container">
      <form>
        <h6 className="text-uppercase text-center">{currentCategory}</h6>
        <ol>
          {questions.map((e) => (
            <li key={e.id} className="text-center">
              {e.Title}
              {options.map(
                (item) =>
                  item.QuestionID === e.id && (
                    <div className="form-check">
                      <fieldset id={`group${e.id}`}>
                        <input
                          onClick={(event) => handleSelect(event.target.id)}
                          className="form-check-input"
                          type="radio"
                          name={`group${e.id}`}
                          value={answers}
                          id={item.id}
                        />
                        <label
                          key={item.QuestionId}
                          className="form-check-label"
                        >
                          {item.OptionText}
                        </label>
                      </fieldset>
                    </div>
                  )
              )}
              <div>
                <p className="font-italic">
                  {" "}
                  <span className="font-weight-bold">Did you know? </span>
                  {e.Description}{" "}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </form>
      <h6>Click Next to continue to the next question</h6>
      <button onClick={() => setNextCategory()} className="btn btn-primary">
        Next
      </button>
      <div>{toNext ? <Redirect to="/survey/questions/success" /> : null}</div>
      {/*<Pagination
        questionsPerPage={questionsPerPage}
        totalQuestions={questions.length}
        paginate={paginate}
      />*/}
      <div className="progress">
        <div
          className="progress-bar bg-success my-4"
          role="progressbar"
          //style={width = 25%}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
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
      <h3>Here's the {category}</h3>
    </div>
  );
}

{
  /*<div>{questions && fetchOptionsByQuestionID(e.id)}</div>*/
}
