import React from "react";
import he from "he";
import clsx from "clsx";

export default function Quiz(props) {
  const answerElements = generateAnswerElements(props.question);

  return (
    <div className="question">
      <h3 className="question--question">{he.decode(props.question.text)}</h3>
      <div className="question--answers">{answerElements}</div>
      <hr className="question--hr" />
    </div>
  );

  // Helper functions
  function generateAnswerElements(question) {
    return question.answers.map((answer) => {
      const classNames = clsx(
        "question--answer",
        answer.selected && "question--selected-answer",
        answer.correct && "correct-answer"
      );
      return (
        <span
          key={answer.id}
          className={classNames}
          onClick={() => props.handleSelect(question.id, answer.id)}
        >
          {he.decode(answer.text)}
        </span>
      );
      // return <span className="question--answer question--selected-answer correct-answer">{answer}</span>
    });
  }
}
