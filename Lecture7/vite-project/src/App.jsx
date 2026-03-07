import {  useCallback, useMemo, useState } from 'react'
import Sum from "./Sum"
import Post from './Post';

function App(){
  const [count,setCount] = useState(0);
  const [number,setNumber] = useState(1000);


  const handleClick = useCallback(()=>{
    console.log("Handle Click");
  }, [count]);
   

  const obj = useMemo(()=>{
    return {name : "Sohail",age : 20};
  },[]);
  const prime = useMemo(()=>{

  }, [number]);
  
  
  return (
    <>
    <h1>Counter : {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <h2>Your Current Numberis : {number}</h2>
    <button onClick={()=>{setNumber(number+1000)}}>Increment Number</button>
    <Sum number={number}></Sum>
    <Post value={obj} ></Post>
    </>
  );
}

export default App;