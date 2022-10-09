import { useEffect, useState } from "react";
import { QUESTION_TIMER } from "../constants/questions";
import useTimer from "../hooks/useTimer";
import Timer from "./Timer"

const Questions = ({ questions, handleCorrectQuestion, handleOnEnd }) => {
  const [counter, setCounter] = useState(0);
  const [time, resetTime] = useTimer(QUESTION_TIMER)


  useEffect(() => {
    if (time === 0) {
      renderNewQuestion()
    }
  })

  const renderNewQuestion = () => {
    resetTime()
    counting();
  }

  const selectOption = (isCorrect) => {
    if (isCorrect) {
      handleCorrectQuestion()
    }
    renderNewQuestion()
  };

  //Question Count
  const counting = () => {
    const newcount = counter + 1;
    if (newcount < questions.length) {
      setCounter(newcount);
      console.log("question plus");
    } else {
      console.log("End");
      handleOnEnd()
    }
  };

  return (
    <div>
      <Timer time={time} />
      <div className='qcontainer'>
        <h3>{counter + 1}. {questions[counter].questionText}</h3>
        {questions[counter].answerOptions.map((answerOption, index) =>
          <span className='options' onClick={() => selectOption(answerOption.isCorrect)} key={index}>{answerOption.answerText}</span>)}
      </div>
    </div>
  )
}



export default Questions
