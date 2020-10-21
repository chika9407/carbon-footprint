import React, { Component } from "react";

export default class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      dateOfCompletion: null,
      answers: [],
    };
  }
  updateInput(e) {
    e.preventDefault();
    const { name } = e.target.name;
    const { value } = e.target.value;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    this.fetchQuestionsById();
    this.fetchOptionsByQuestionID();
  }

  fetchOptionsByQuestionID = async () => {
    try {
      fetch("/questions")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          // upon success, update tasks
          this.setState({ answers: json });
        });
    } catch (err) {
      console.log(err);
    }
  };

  fetchQuestionsById = async () => {
    try {
      fetch("/questions")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          // upon success, update tasks
          this.setState({ answers: json });
        });
    } catch (err) {
      console.log(err);
    }
  };

  addAnswersByOptionID = async () => {
    try {
      fetch("/questions")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          // upon success, update tasks
          this.setState({ answers: json });
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h3>Click Start to do the entire survey</h3>
        <button className="btn btn-primary">Start</button>
      </div>
    );
  }
}
