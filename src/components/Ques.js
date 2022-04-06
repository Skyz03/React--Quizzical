import React from "react";

const Ques = (props) => {
  const incorrect_answers = props.incorrect.map((incorrect) => {
    return <button className="ques__option">{incorrect}</button>;
  });
  console.log(incorrect_answers);

  return (
    <div className="ques">
      <div className="ques-container">
        <h2 className="ques__title">{props.question}</h2>
        <button className="ques__answer">{props.correct}</button>
        {incorrect_answers}
      </div>
    </div>
  );
};
export default Ques;
