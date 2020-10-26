import React, { useState, useEffect } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [categories] = useState(["food", "transport", "home", "stuff"]);
  let { category } = useParams();
  category = category || "food";

  const history = useHistory();

  const [toNext, setToNext] = useState(false);

  useEffect(() => {
    document.title = `${category} - Questionnaire`;
  });

  useEffect(() => {
    async function fetchQuestionsByCategory(category) {
      const response = await fetch("/category/" + category + "/questions/");
      const json = await response.json();
      setQuestions(json);
    }
    fetchQuestionsByCategory(category);
  }, [category]);

  const setNextCategory = () => {
    let i = categories.indexOf(category);
    console.log("setNextCategory", i);
    if (i >= 0 && i < categories.length) {
      history.push(`/survey/questions/${categories[i + 1]}`);
    }
  };

  useEffect(() => {
    async function fetchOptions() {
      const response = await fetch("/options/");
      const json = await response.json();
      setOptions(json);
      console.log(options);
    }
    fetchOptions();
  }, []);

  const handleSelect = ({ key }: value) => {
    setAnswers({ ...answers, value });
    console.log({ ...answers, value });
  };

  return (
    <div className="container">
      <form>
        <h6 className="text-uppercase text-center mt-2">{category}</h6>
        <ol>
          {questions.map((e) => (
            <li key={e.id}>
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
      <button onClick={() => setNextCategory()} className="btn btn-primary">
        Next
      </button>
      <div>{toNext ? <Redirect to="/survey/questions/success" /> : null}</div>
    </div>
  );
}
