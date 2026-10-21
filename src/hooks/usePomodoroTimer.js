import { useEffect, useState } from "react";

function usePomodoroTimer() {
  const [remainingTime, setRemainingTime] = useState(1500);
  const [isRunning , setIsRunning] = useState(false);

  useEffect(() => {
     if(!isRunning) return;
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime > 1 ? prevTime-1 : 0 );
    }, 1000);

  return () => clearInterval(timer);
  }, [isRunning]);

useEffect(() => {
      if(remainingTime===0) setIsRunning(false);
    } , [remainingTime])


const resetTimer = (seconds) => {
    setIsRunning(false);
    setRemainingTime(seconds);
}


  return { remainingTime, setRemainingTime , isRunning , setIsRunning , resetTimer};
}

export default usePomodoroTimer;
