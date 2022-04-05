import React from "react";

const Ques = (props) => {
  return (
    <div className="Ques">
      <div className="Ques-container">
        <h1>{props.question}</h1>
        <h1>{props.correct}</h1>
        <p>{props.incorrect}</p>
      </div>
    </div>
  );
};
export default Ques;
