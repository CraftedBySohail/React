const Post = React.memo(({value})=>{


    console.log("Post render");
    return (
        <>
        <h1>Your Name is{value.name} age {value.age}</h1>
        
        </>
    );
})


export default Post;