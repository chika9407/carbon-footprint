import React from "react";

export default class Questions extends React.Component {
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
    //grab the category and apply the 1st fetch method to it, and apply the 2nd fech method by looping through the options
    this.fetchQuestionsByCategory("food");
    this.fetchOptionsByQuestionID(1);
    //const option = document.querySelector("label");
    //console.log(option);
    //option.forEach((e) => this.fetchOptionsByQuestionID(e));
    //;
  }

  fetchQuestionsByCategory = async (category) => {
    try {
      await fetch("/category/" + category + "/questions/")
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

  fetchOptionsByQuestionID = async (QuestionId) => {
    try {
      await fetch("/questions/" + QuestionId + "/options/")
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
              {options.map((e) => (
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
          onClick={() => this.addAnswersByOptionID()}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    );
  }
}

//))}
