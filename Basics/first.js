
// element = {

// }


// const React = {
//     createElement(tag,attributes,children){
//     const element = document.createElement(tag);
//     element.textContent = children;
//     if(key === 'style'){
//         Object.assign(element.style , attributes.style);
//     }
//     else {
//         for(let key in attributes){
//         element[key] = attributes[key];
//     }
//     }

//     return element;
//     }
// }




// style is a read only property
function createElement(tag,attributes,children){
    const element = document.createElement(tag);
    element.textContent = children;
    if(key === 'style'){
        Object.assign(element.style , attributes.style);
    }
    else {
        for(let key in attributes){
        element[key] = attributes[key];
    }
    }

    return element;
}

const element1 = createElement("h1", {className : "element", id : "first", style : {
    fontSize : "30px",
    backgroundColor : "orange",
    color : "white"
}}, "Hello Coder Army");

const root = document.getElementById('root');
root.append(element1);



// react is nothing but the javascript object
    // 1
    
   function createELement(){
    
   }