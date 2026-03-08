import { useState } from 'react'
import { useRef } from 'react';



function App(){
  const [time,setTime] = useState(0);
  const intervalIdRef = useRef(null);

  function handleStart(){
    if(intervalIdRef.current != null){
      return;
    }

    intervalIdRef.current = setInterval(()=>{
      setTime(time=>time+1);
    },1000);

  }

  function handleStop(){
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  }


  function handleReset(){
    clearInterval(intervalIdRef.current);
    setTime(0);
  }
  return (
    <>
    <h1>Stopwatch : {time}</h1>
    <div></div>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;