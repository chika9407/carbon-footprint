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

  fetchOptionsByQuestionID = async (id) => {
    try {
      fetch("/options" + id)
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

  fetchQuestionsById = async (id) => {
    try {
      fetch("/questions" + id)
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

  addAnswersByOptionID = async (id) => {
    try {
      fetch("/answers" + id)
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
      <div className="container">
        <h3>Click Start to do the entire survey</h3>

        <select>
          <option></option>
        </select>
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
/*<form>
          <input name="firstname" className="form-control">
            Your firstname
          </input>
          <input name="firstname" className="form-control">
            Your lastname
          </input>
        </form>*/
