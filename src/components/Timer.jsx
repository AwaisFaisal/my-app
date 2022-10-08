
import { useEffect, useState } from 'react'

const Timer = ({ count }) => {

  const [time, setTime] = useState(count)

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("minus: ", time)
      setTime(time - 1);
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [time])


  return (
    <div className='timer'>
      <span>{time}</span>
    </div>
  )
}

export default Timer
