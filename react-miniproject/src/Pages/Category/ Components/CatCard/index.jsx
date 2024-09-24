import React from "react";
import { useEffect } from "react";
import { FaCirclePlay } from "react-icons/fa6";


const CatCard = () =>{
  
    return(
        <form className="CatCard flex flex-col justify-between rounded-md p-3 shadow shadow-black gap-5">
            <h1 className="text-2xl font-bold">Category : Linux</h1>
            <div className="flex flex-col  gap-2">
                <h1 className="opacity-50">Select Difficulty</h1>
                <select className="px-3 py-2 rounded-md border border-slate-500" name="difficulty" id="difficulty">
                    <option value="">Select</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </select>
            </div>
            <button className="bg-primary text-secondary px-4 py-2 rounded-md">Start Test</button>
            {/* <FaCirclePlay size={40} className="text-primary"/> */}
        </form>
    )
}

export default CatCard