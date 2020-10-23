import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const { category } = useParams();
  //const [answers, setAnswers] = useState([]);
  //const [category] = useState(["food", "transport", "home", "stuff"]);

  /*const fetchQuestionsByCategory = (category) => {
    useEffect(async () => {
      const response = await fetch("/category/" + category + "/questions/");
      const data = await response.json();
      setQuestions(data.results);
      console.log({ questions });
    }, []);
    return { data };
  };

  const fetchOptionsByQuestionID = (QuestionId) => {
    useEffect(async () => {
      const response = await fetch("/questions/" + QuestionId + "/options/");
      const data = await response.json();
      setOptions(data);
      //console.log(json);
      console.log({ options });
    }, []);
  };*/

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
      This is category profile
      <h3>Click Next to continue to the next question</h3>
      <ol>
        {questions.map((e) => (
          <li key={e.id} className="text-center">
            {e.Title}
            {options.map((e) => (
              <div className="form-check">
                <input
                  //onChange={() => this.addAnswersByOptionID()}
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
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
      <button
        //onClick={() => this.addAnswersByOptionID()}
        className="btn btn-primary"
      >
        Next
      </button>
    </div>
  );
}
