import React from "react";

const Home = (props) => {
  return (
    <div className="loader">
      <h1 className="loader__title">Quizzical</h1>
      <p className="loader__para">Test Your Computer Knowledge</p>
      <button className="loader__btn" onClick={props.onClick}>
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
