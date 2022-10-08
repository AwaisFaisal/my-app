
const Questions = ({ que, counter, select }) => {

  return (
    <div>
    <div className='qcontainer'>
      <h3>{counter + 1}. {que[counter].questionText}</h3>
      {que[counter].answerOptions.map((answerOption, index) => 
        <span className='options' onClick={() =>select(answerOption.isCorrect)} key={index}>{answerOption.answerText}</span>)}
    </div>
    </div>
  )
}



export default Questions
