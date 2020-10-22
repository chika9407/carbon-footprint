import React from "react";

export default class App extends React.Component {
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
    this.fetchQuestionsByCategory(1, "food");
    this.fetchOptionsByQuestionID(1, 1);
  }

  fetchQuestionsByCategory = async (id, category) => {
    try {
      await fetch("/questions/" + id + "/" + category)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("question not found");
          }
        })
        .then((json) => {
          this.setState({ questions: json });
          //console.log(json);
          console.log(this.state.questions);
        });
    } catch (err) {
      console.log(err);
    }
  };

  fetchOptionsByQuestionID = async (id, QuestionId) => {
    try {
      await fetch("/options/" + id + "/" + QuestionId)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.setState({ options: json });
          //console.log(json);
          console.log(this.state.options);
        });
    } catch (err) {
      console.log(err);
    }
  };

  addAnswersByOptionID = async (id) => {
    try {
      await fetch("/answers/" + id)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.setState({ answers: json });
          console.log(json);
          console.log(this.state.answers);
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { questions, options } = this.state;
    return (
      <div className="container">
        <h3>Click Next to continue to the next question</h3>
        <ol>
          {questions.map((e) => (
            <li key={e.id} className="text-center">
              {e.Title}
            </li>
          ))}
        </ol>
        <div className="form-check">
          <input
            onChange={() => this.addAnswersByOptionID()}
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            checked
          />
          {options.map((e) => (
            <label key={e.id} className="form-check-label" for="exampleRadios1">
              {e.OptionText}
            </label>
          ))}
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
          Next
        </button>
      </div>
    );
  }
}
