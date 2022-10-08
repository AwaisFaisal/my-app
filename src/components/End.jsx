import React from 'react'

const End = ({ score, que }) => {
  return (
    <div className='score'>
      <span>Your score is {score} out of {que.length}</span>
    </div>
  )
}

export default End
