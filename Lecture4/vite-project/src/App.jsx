import { useState } from "react";
function App(){

  const [count , setCount] = useState(0);


//   set Count is a function

  function increaseNumber(){
    // count++;
    setCount(count+1);
  }
  
  return (
    <>
    <p>
        Counter : {count}
    </p>
    <button onClick={increaseNumber}>Increment</button>
    </>
  );

  
}

export default App;
