// const [question, setQuestion] = React.useState([]);

// const fetchQuestion = () => {
//   fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple")
//     .then((res) => res.json())
//     .then((data) => {
//       let questions = data.results.map((result) => {
//         return {
//           question: result.question,
//           correct: result.correct_answer,
//           incorrect: result.incorrect_answers,
//           id: nanoid(),
//           hold: false,
//         };
//       });
//       setQuestion(questions);
//     });
// };

// React.useEffect(() => {
//   fetchQuestion();
// }, []);

// function holdQuestion(id) {
//   setQuestion((oldQuestion) => {
//     oldQuestion.map((ques) => {
//       return ques.id === id ? (ques.hold = true) : ques;
//     });
//   });
// }

// const questionElement = question.map((ques) => {
//   return (
//     <Ques
//       key={ques.id}
//       hold={ques.hold}
//       onClick={() => holdQuestion(ques.id)}
//       question={ques.question}
//       correct={ques.correct}
//       incorrect={ques.incorrect}
//       id={ques.id}
//     />
//   );
// });
