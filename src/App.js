import React from "react";
import "./App.scss";
import Ques from "./components/Ques";
function App() {
  const [question, setQuestion] = React.useState([]);

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
  const questionElement = question.map((ques) => {
    return (
      <Ques
        question={ques.question}
        correct={ques.correct_answer}
        incorrect={ques.incorrect_answers}
      />
    );
  });

  return <div className="App">{questionElement}</div>;
}

export default App;
