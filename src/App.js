import { useState } from "react";
import Intro from "./components/Intro";
import Questions from "./components/Questions";
import End from "./components/End";

function App() {
  const [questions] = useState([
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ]);

  // Score
  const [score, setScore] = useState(0);

  //Show questions or End
  const [isStart, setIsStart] = useState(false);

  const handleOnStart = () => {
    setIsStart(true);
  };

  const handleOnEnd = () => {
    setIsStart(false);
  };

  const handleCorrectQuestion = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      {isStart ? (
        <Questions
          questions={questions}
          handleCorrectQuestion={handleCorrectQuestion}
          handleOnEnd={handleOnEnd}
        />
      ) : (
        <Intro number={questions.length} handleOnStart={handleOnStart} />
      )}

      {isStart === false && <End score={score} que={questions} />}
    </div>
  );
}

export default App;
