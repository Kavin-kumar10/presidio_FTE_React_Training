import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { calculateScore, setTimePop } from "../../Redux/QuizSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const TimePop = () =>{
    const dispatch = useDispatch();
    
    return(
    <div className="TimePop h-screen z-50 flex items-center justify-center w-screen fixed top-0 left-0 bg-[rgba(225,225,225,0.8)]">
        <div className="w-4/5 sm:w-1/2 md:w-1/3 rounded-md bg-white shadow-md">
            <div className="header flex justify-between items-center border-b-2 border-slate-300 p-4">
                <h1 className=" text-xl font-semibold opacity-50">Complete Test</h1>
            </div>
            <div className="flex flex-col p-5 gap-5">
                <h1 className="text-xl font-bold">Time's Up</h1>
                <Link to="/Score" onClick={()=>{
                    dispatch(calculateScore())
                    dispatch(setTimePop(false))
                }} className="bg-primary text-secondary px-4 py-2 rounded-md text-center">View Score</Link>
            </div>
        </div>
    </div>
    )
}

export default TimePop