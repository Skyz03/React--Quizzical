import React from "react";
import Btn from "./Btn";
import { nanoid } from "nanoid";
import he from "he";

const Ques = (props) => {
  function shuffleArray() {
    // defining a new array to have both correct and incorrect answer at one place
    let array = [];

    // Both answer being pushed to the array
    props.incorrect.map((incorrect) => {
      return array.push(incorrect);
    });
    array.push(props.correct);
    // the shuffle login behind the scene.
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    return shuffledArray;
  }
  // console.log(props.correct);

  const elements = shuffleArray();
  const answerElement = elements.map((element) => {
    // console.log(element);

    return (
      <Btn
        id={nanoid()}
        correct={props.correct}
        element={element}
        hold={props.hold}
      />
    );
  });

  return (
    <div className="ques">
      <div className="ques-container">
        <h2 className="ques__title">{he.decode(props.question)}</h2>
        {answerElement}
      </div>
    </div>
  );
};
export default Ques;
