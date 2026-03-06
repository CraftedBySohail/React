import { useState } from "react";
import Food from "./Food";

function List(){
    const [foodItem,setFoodItem] = useState(["Apple","Orange","Banana"]);

    function handleChange(){
        setFoodItem(["Mango",...foodItem]);
    }

    return (
        <>
        <button onClick={handleChange}>Increment </button>
        <Food foods={foodItem}></Food>
        </>
    );
}

export default List;