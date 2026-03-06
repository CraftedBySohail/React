
import {useState} from "react";
import Counting from "./Counting.jsx";

function Clock(){
    const [clocks,setClocks] = useState(["A","B","C"]);
    
    function handleChange(){
        setClocks(["D",...clocks]);
    }
    return (
        <>
       <button onClick={handleChange}>Increment Clock</button>
        <div>
            { clocks.map(clock => <Counting  name= {clock}></Counting>)}
        </div>
        </>
    );
}

export default Clock;