import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
//import Questions from "./Questions";

export default function Survey() {
  //const [userInfo, setUserInfo] = useState({ firstname: "", lastname: "" });
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [toQuestions, setToQuestions] = useState(false);

  useEffect(() => {
    document.title = "Survey";
  });

  {
    /*const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setUserInfo({ [name]: value });
    //console.log(firstname);
    //console.log(lastname);
  };*/
  }

  //setLastName({ [name]: value });

  return (
    <div className="container">
      <h4 className="mt-2 text-center">
        Begin the Survey to find out what your carbon footprint is{" "}
      </h4>
      <form className="my-2">
        <h6> Your firstname</h6>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={(event) => setFirstName(event.target.value)}
          className="form-control my-4"
          placeholder="your firstname"
          required="true"
        />
        <h6>Your lastname</h6>
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={(event) => setLastName(event.target.value)}
          className="form-control mt-4"
          placeholder="your lastname"
          required="true"
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
