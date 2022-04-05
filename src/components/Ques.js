import React from "react";

const Ques = () => {
  const [question, setQuestion] = React.useState([]);

  const fetchQuestion = () => {
    fetch("https://opentdb.com/api.php?amount=1&category=9&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        let question = data.results;
        setQuestion(question);
      });
  };

  React.useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <div className="Ques">
      {question.map((ques) => (
        <div className="Ques-container">
          <h1>{ques.question}</h1>
          <h2>{ques.correct_answer}</h2>
          <h2>{ques.incorrect_answers[0]}</h2>
          <h2>{ques.incorrect_answers[1]}</h2>
          <h2>{ques.incorrect_answers[2]}</h2>
        </div>
      ))}
    </div>
  );
};
export default Ques;
