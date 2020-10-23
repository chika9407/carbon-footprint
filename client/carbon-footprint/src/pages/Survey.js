import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
//import Questions from "./Questions";

export default function Survey() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [toQuestions, setToQuestions] = useState(false);
  const [answers, setAnswers] = useState([]);

  const addAnswers = () => {
    setAnswers();
  };

  useEffect(() => {
    document.title = "Begin the Survey";
  });
  //let match = useRouteMatch();
  return (
    <div className="container">
      <h4>Begin the Survey to find out what your carbon footprint is </h4>
      <form className="my-2">
        <h6> Your firstname</h6>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={(event) => setFirstName(event.target.value)}
          className="form-control my-4"
          placeholder="your firstname"
        />
        <h6>Your lastname</h6>
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={(event) => setLastName(event.target.value)}
          className="form-control mt-4"
          placeholder="your lastname"
        />
        <button
          onClick={() => setToQuestions(true)}
          className="btn btn-primary mt-2"
        >
          Start
        </button>
        <div>{toQuestions ? <Redirect to="/survey/questions" /> : null}</div>
      </form>
    </div>
  );
}
