import { useEffect, useState} from 'react'
const useTimer = (initialValue) => {
    const [timer, setTimer] = useState(initialValue)
    useEffect(()=> {
        console.log(timer)
          if (timer > 0 ) {
            setTimeout(() => {
              setTimer(timer - 1)
              
            }, 1000);
            
          }
        
       }, [timer])

 //const setReset =() => {setTimer(initialValue)}
      return [timer, setTimer];
}

export default useTimer; 