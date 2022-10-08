import React from 'react'

const Intro = ({ number, handleOnStart }) => {

  return (
    <header className='intro'>
      <h1 className='header'>Quiz App</h1>
      <ul>
        <li className='list'>There are {number} questions</li>
        <li className='list'>Each question will have 4 option</li>
        <li className='list'>You will have 10 seconds to select the right answer</li>
      </ul>
      <button className='btn' onClick={() => handleOnStart()}>START</button>
    </header>
  )
}



export default Intro
