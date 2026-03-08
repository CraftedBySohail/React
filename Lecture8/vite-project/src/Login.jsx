import { useRef, useState } from "react";


function Login(){
    // const [email,setEmail] = useState("");
    // const [password,setPassword] = useState("");
   
    const emailRef = useRef(null);
    const passwordRed = useRef(null);
   
   
    console.log("render");
    function handleSubmit(e){
        e.preventDefault();


    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
        </>
    );
}

export default Login;