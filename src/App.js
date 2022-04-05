import React from "react";
import "./App.scss";
function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  let showChar;

  fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple")
    .then((res) => res.json())
    .then((data) => showChar(data.results));

  console.log(showChar());

  return <div className="App">{showChar}</div>;
}

export default App;
