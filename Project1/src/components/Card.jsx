import React from "react";
import { FaFileImage } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FaClosedCaptioning } from "react-icons/fa";
import { motion } from "framer-motion";

function Card({data,reference}){
return (
    <>
        < motion.div drag dragConstraints={reference} className="relative w-60 h-72 bg-sky-200 rounded-[20px] bg-zinc-900/100 text-white px-5 py-10 overflow-hidden">
        
        <FaFileImage/>
        <p className="text-xs mt-5 font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">

            <div className="flex item-center justify-between  px-8 py-3 mb-3">
                <h5>.4mb</h5>
                <span className="w-5 bg-sky-200 rounded-full flex items-ccenter justify-center">
                    {data.close ?<FaClosedCaptioning /> :  <FaDownload size={"1em"} /> }
                   
                </span>
                
            </div>

            {
                data.tag.isOpen && (<div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
              <h3 className="text-sm font-semibold">
                {data.tag.tagTitle}
              </h3>
            </div>)
            }

            

        </div>
        
        
        </motion.div>
            
    </>
)
}

export default Card;