import { useState } from "react";
import Timer from "./Timer"

const Questions = ({ questions, handleCorrectQuestion, handleOnEnd }) => {
  const [counter, setCounter] = useState(0);



  const selectOption = (isCorrect) => {
    if (isCorrect) {
      handleCorrectQuestion()
      console.log("correct");
    }
    counting();
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
      <Timer count={10} />
      <div className='qcontainer'>
        <h3>{counter + 1}. {questions[counter].questionText}</h3>
        {questions[counter].answerOptions.map((answerOption, index) =>
          <span className='options' onClick={() => selectOption(answerOption.isCorrect)} key={index}>{answerOption.answerText}</span>)}
      </div>
    </div>
  )
}



export default Questions
