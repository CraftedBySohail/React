import { useEffect, useState } from "react";





function App(){
   const [user,setUser] = useState([]);
    // const [name,setName] = useState("");

    const [count,setCount] = useState(30);    useEffect(()=>{
      async function GithubProfile(){
    
    const response = await fetch(`https://api.github.com/users?per_page=12${count}`);
    const data = await response.json();
    setUser(data);
  }

  // baar baar App call hora hai
  

  GithubProfile();
    },[count]);


    // function handlChange(e){
    // setName(e.target.value.toUpperCase());
    // }

  return (
    <>
    <h1>Github user</h1>
    <input type="number"  value = {count} onChange={(e)=>{
      setCount(e.target.value)
    }}></input>
    <div style={{display: "flex" , justifyContent: "center",alignItems:"center",flexWrap:"nowrap",gap:"20px",}}>
      {
        user.map(
          users=>(
            <img src={users.avatar_url} height={"100px"}></img>
          )
        )
      }
    </div>
    </>
  )
}

export default App;