import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setSubmitPop } from "../../Redux/QuizSlice";
import { Link } from "react-router-dom";
import { calculateScore } from "../../Redux/QuizSlice";

const SubmitPop = () =>{
    const dispatch = useDispatch();
    return(
        <div className="SubmitPop h-screen z-50 flex items-center justify-center w-screen fixed top-0 left-0 bg-[rgba(225,225,225,0.8)]">
        <div className="w-4/5 sm:w-1/2 md:w-1/3 rounded-md bg-white shadow-md">
            <div className="header flex justify-between items-center border-b-2 border-slate-300 p-4">
                <h1 className=" text-xl font-semibold opacity-50">Submit Test</h1>
                <IoIosCloseCircleOutline onClick={()=>dispatch(setSubmitPop(false))} className="opacity-50" size={30}/>
            </div>
            <div className="flex flex-col p-5 gap-5">
                <h1 className="text-xl font-bold">Submit your test?</h1>
                <Link to="/Score" onClick={()=>{
                    dispatch(calculateScore())
                    dispatch(setSubmitPop(false))
                }} className="bg-primary text-secondary px-4 py-2 rounded-md text-center">Submit Test</Link>
            </div>
        </div>
    </div>
    )
}

export default SubmitPop