import React from "react";
import "./App.scss";
import Ques from "./components/Ques";
import { nanoid } from "nanoid";

function App() {
  const [question, setQuestion] = React.useState([]);
  const [screen, setScreen] = React.useState(false);

  const fetchQuestion = () => {
    fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        let question = data.results;
        setQuestion(question);
      });
  };

  React.useEffect(() => {
    fetchQuestion();
  }, []);

  console.log(question);
  function holdQuestion(id) {
    setQuestion((oldQuestion) => {
      oldQuestion.map((ques) => {
        return ques.id === id ? (ques.hold = true) : ques;
      });
    });
  }

  const questionElement = question.map((ques) => {
    return (
      <Ques
        hold={ques.hold}
        onClick={() => holdQuestion(ques.id)}
        question={ques.question}
        correct={ques.correct_answer}
        incorrect={ques.incorrect_answers}
      />
    );
  });

  const handleClick = () => {
    setScreen((prevState) => !prevState);
  };

  return (
    <div className="App">
      {screen ? (
        <div>
          {questionElement}
          <button className="check_answer">Check Answers</button>
        </div>
      ) : (
        <div className="loader">
          <h1 className="loader__title">Quizzical</h1>
          <p className="loader__para">Some description if needed</p>
          <button className="loader__btn" onClick={handleClick}>
            Start Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
