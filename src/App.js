import { useState } from 'react';
import Intro from './components/Intro'
import Questions from './components/Questions';
import End from './components/End'




function App() {
  //questions array
  const [que] = useState([{
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },])

  // Score
  const [score, setScore] = useState(0)

  // question counter
  const [counter, setCounter] = useState(0)

  //Show questions or End
  const [isstart, setIsstart] = useState(false)


 

 //option selected
 const Select = (isCorrect) => {
 if (isCorrect === true) {
  setScore(score + 1)
  console.log('correct')
  }
  counting()
 }


 //Question Count
 const counting = () => {
 const newcount = counter + 1
if (newcount < que.length) {
    setCounter(newcount)
    console.log('question plus')

} else {
  console.log('End')
  setIsstart(false)
  }
 }

//reset
const reset = () => {
  setIsstart(true)
  setScore(0)
  setCounter(0)
}


    return (
      <div className="App">
        
        {isstart
          ? <Questions que={que} counter={counter} select={Select} />
          : <Intro number={que.length} setstart={reset} />}

        {isstart === false && <End score={score} que={que} />}

      </div>
    );
  }



export default App;
