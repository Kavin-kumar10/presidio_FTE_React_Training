import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { closePop, setParams,setDifficulty, startQuiz } from "../../Redux/QuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizQuestions } from "../../Redux/QuizSlice";
import { Link } from "react-router-dom";


const CatCardPop = () =>{
    const CategoryName = useSelector(state => state.Quiz.params.CategoryName)
    const params = useSelector(state => state.Quiz.params);
    const dispatch = useDispatch();
    return(
        <div className="CatCardPop h-screen z-50 flex items-center justify-center w-screen fixed top-0 left-0 bg-[rgba(225,225,225,0.8)]">
            <div className="w-4/5 sm:w-1/2 md:w-1/3 rounded-md bg-white shadow-md">
                <div className="header flex justify-between items-center border-b-2 border-slate-300 p-4">
                    <h1 className=" text-xl font-semibold opacity-50">Test yourself</h1>
                    <IoIosCloseCircleOutline onClick={()=>dispatch(closePop())} className="opacity-50" size={30}/>
                </div>
                <div className="flex flex-col p-5 gap-5">
                    <h1 className="text-xl font-bold">Category : {CategoryName}</h1>
                    <div className="flex flex-col  gap-2">
                        <h1 className="opacity-50">Select Difficulty</h1>
                        <select onChange={(e)=>dispatch(setDifficulty({Difficulty:e.target.value}))} className="px-3 py-2 rounded-md border border-slate-500" name="difficulty" id="difficulty">
                            <option selected value="easy">easy</option>
                            <option value="medium">medium</option>
                            <option value="hard">hard</option>
                        </select>
                    </div>
                    <Link to="/Test" onClick={()=>{
                        dispatch(closePop())
                        dispatch(fetchQuizQuestions());
                    }} className="bg-primary text-secondary px-4 py-2 rounded-md text-center">Start Test</Link>
                </div>
            </div>
        </div>
    )
}

export default CatCardPop