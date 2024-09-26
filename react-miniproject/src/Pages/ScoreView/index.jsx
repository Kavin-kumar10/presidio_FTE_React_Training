import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { calculateScore } from "../../Redux/QuizSlice";
import { Link } from "react-router-dom";

const ScoreView = () =>{
    useEffect(()=>{
        dispatch(calculateScore())
    },[])
    const Score = useSelector(state => state.Quiz.Score);
    const dispatch = useDispatch()
    return(
        <div className="ScoreView flex items-center justify-center h-screen w-screen bg-secondary flex-col gap-10 sm:gap-16 md:gap-24">
            <h1 className="font-second text-5xl sm:text-7xl md:text-9xl font-bold text-primary">Thank you</h1>
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-5 items-center justify-center">
                <p className="text-slate-700 font-semibold text-xl sm:text-2xl md:text-4xl">Your Score {Score}/10</p>
                <Link to="/" className="text-blue-600 text-sm md:text-xl">Move to Home</Link>
            </div>
        </div>
    )
}

export default ScoreView;