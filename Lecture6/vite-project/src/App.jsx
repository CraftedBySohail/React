import { useState } from 'react'

function App(){
const [count,setCount] = useState([1,2,3,4,5]);

function handleChange(){
    let arr = [...count];
    arr.push(40);
    setCount(arr);
}
  return (
    <>
    <p>This is the counter for react</p>
    <h1>Counter : {count}</h1>

    <button onClick={handleChange}>Increment</button>
    

    </>
  );

}

export default App;