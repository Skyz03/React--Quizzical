import React from "react";
import "./App.scss";
import Home from "./components/Home";
import Ques from "./components/Ques";

function App() {
  const [startQuiz, setStartQuiz] = React.useState(false);

  const handleClick = () => {
    setStartQuiz((prevState) => !prevState);
  };

  return (
    <div className="App">
      {!startQuiz ? (
        <Home onClick={handleClick} />
      ) : (
        <Ques endQuiz={handleClick} />
      )}
    </div>
  );
}

export default App;
