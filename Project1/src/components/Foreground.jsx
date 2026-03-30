import React from "react";
import Card from "./Card";
import { useRef } from "react";

function Foreground(){
    const ref = useRef(null);


    const data = [
        {desc : "Positioning without a reference will always take you somewhere you didn’t intend",
            filesize : ".9mb",
            close : true,
            tag :  {isOpen : true,
                tagTitle : "Download Now",
                tagColor : "green",
            }
        },

         {desc : "Positioning without a reference will always take you somewhere you didn’t intend",
            filesize : ".9mb",
            close : true,
            tag :  {isOpen : true,
                tagTitle : "Download Now",
                tagColor : "blue",
            }
        },

         {desc : "Positioning without a reference will always take you somewhere you didn’t intend",
            filesize : ".9mb",
            close : true,
            tag :  {isOpen : true,
                tagTitle : "Download Now",
                tagColor : "red",
            }
        }
    ];

    


   
    return (
        <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap">
            {data.map((item,index)=>(
                <Card data={item} reference={ref}/>
            ))}
        </div>
    )
}

export default Foreground;