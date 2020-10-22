import React, { Component } from "react";

export default class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      dateOfCompletion: null,
      currentPage: null, //category
      steps: [], //all 4 categories (1,2,3,4)
      questions: [],
      options: [],
      answers: [], //once the user submits
    };
  }

  updateInput(e) {
    e.preventDefault();
    const { name } = e.target.name;
    const { value } = e.target.value;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    this.fetchQuestionsByCategory();
    this.fetchOptionsByQuestionID();
  }

  fetchQuestionsByCategory = async (id, category) => {
    try {
      await fetch("/questions" + id + category)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.setState({ questions: json });
        });
    } catch (err) {
      console.log(err);
    }
  };

  fetchOptionsByQuestionID = async (id, QuestionId) => {
    try {
      await fetch("/options" + id + QuestionId)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.setState({ options: json });
        });
    } catch (err) {
      console.log(err);
    }
  };

  addAnswersByOptionID = async (id) => {
    try {
      await fetch("/answers" + id)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.setState({ answers: json });
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="container">
        <h3>Click Start to do the entire survey</h3>
        <ol></ol>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            checked
          />
          <label className="form-check-label" for="exampleRadios1"></label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label className="form-check-label" for="exampleRadios2"></label>
        </div>
        <button
          onClick={() => this.addAnswersByOptionID()}
          className="btn btn-primary"
        >
          Start
        </button>
      </div>
    );
  }
}
