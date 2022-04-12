import React from "react";
import Quiz from "./Quiz";
import { nanoid } from "nanoid";
import _ from "lodash";

const Ques = (props) => {
  const [showAnswers, setShowAnswers] = React.useState(false);
  const [quiz, setQuiz] = React.useState([]);
  const [score, setScore] = React.useState("");

  const questionElements = quiz.map((question) => {
    return (
      <Quiz key={question.id} question={question} handleSelect={handleSelect} />
    );
  });

  React.useEffect(() => {
    getQuiz();
  }, []);

  function handleSelect(questionId, answerId) {
    setQuiz((prevQuiz) => setSelected(prevQuiz, questionId, answerId));
  }

  function checkAnswersOrReset() {
    if (!showAnswers) {
      setScore(calculateScore());
      setShowAnswers(true);
    } else {
      // setQuiz([])
      props.endQuiz();
    }
  }
  return (
    <div className={"quiz " + (showAnswers && "show-answers")}>
      <div className="questions">{questionElements}</div>

      {!quiz.length ? (
        "Loading..."
      ) : (
        <div className="quiz--result">
          {showAnswers && <span className="quiz--score">{score}</span>}

          <button
            className="button quiz--check-answers-button"
            onClick={checkAnswersOrReset}
          >
            {showAnswers ? "Play again" : "Check answers"}
          </button>
        </div>
      )}
    </div>
  );

  // Helper Functions
  function calculateScore() {
    const totalQuestions = quiz.length;
    const correctAnswers = quiz.filter((question) => {
      return question.answers.filter(
        (answer) => answer.selected && answer.correct
      ).length;
    }).length;
    return `You scored ${correctAnswers}/${totalQuestions} correct answers`;
  }

  function setSelected(prevQuiz, questionId, answerId) {
    return prevQuiz.map((question) => {
      if (question.id === questionId) {
        const answers = question.answers.map((answer) => {
          return answer.id === answerId
            ? { ...answer, selected: true }
            : { ...answer, selected: false };
        });
        return {
          ...question,
          answers: answers,
        };
      } else return question;
    });
  }

  function getQuiz() {
    const apiUrl =
      "https://opentdb.com/api.php?amount=10&category=18&type=multiple";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setQuiz(prepQuiz(data.results));
      });
  }

  function prepQuiz(quizData) {
    return quizData.map((question) => {
      return {
        id: nanoid(),
        text: question.question,
        answers: allAnswers(question),
      };
    });

    // Helper functions
    function allAnswers(question) {
      const all = [
        ...incorrectAnswers(question),
        {
          id: nanoid(),
          text: question.correct_answer,
          correct: true,
          selected: false,
        },
      ];
      return _.shuffle(all);
    }
    function incorrectAnswers(question) {
      const incorrect_answers = question.incorrect_answers.map((answer) => {
        return {
          id: nanoid(),
          text: answer,
          correct: false,
          selected: false,
        };
      });
      return incorrect_answers;
    }
  }
};

export default Ques;
