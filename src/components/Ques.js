import React from "react";

const Ques = (props) => {
  function shuffleArray() {
    let array = [];

    props.incorrect.map((incorrect) => {
      return array.push(incorrect);
    });
    array.push(props.correct);
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    return shuffledArray;
  }

  const elements = shuffleArray();
  const answerElement = elements.map((element) => {
    return (
      <button className={props.hold ? "ques__option" : ""}>{element}</button>
    );
  });

  return (
    <div className="ques">
      <div className="ques-container">
        <h2 className="ques__title">{props.question}</h2>
        {answerElement}
      </div>
    </div>
  );
};
export default Ques;
