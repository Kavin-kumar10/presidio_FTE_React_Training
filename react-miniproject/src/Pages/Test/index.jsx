import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Question from "../../Components/Question";
import { nextQuestion } from "../../Redux/QuizSlice";
import Loading from "../../Components/Loading";
import SubmitPop from "../../Components/SubmitPop";
import { setSubmitPop } from "../../Redux/QuizSlice";
import { startQuiz } from "../../Redux/QuizSlice";
import { prevQuestion } from "../../Redux/QuizSlice";
import Timer from "../../Components/Timer";
import TimePop from "../../Components/TimePop";
import { useNavigate } from "react-router-dom";

const Test = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const category = useSelector(state => state.Quiz.params.CategoryName)
    const loading = useSelector(state => state.Quiz.loading);
    const Questions = useSelector(state => state.Quiz.Questions)
    const index = useSelector(state => state.Quiz.index);
    const SubmitPopState = useSelector(state => state.Quiz.SubmitPopState)
    const selectedValue = useSelector(state => state.Quiz.ChoosenOptions);
    const timePopHandler = useSelector(state => state.Quiz.timePopState)

    useEffect(() => {
        if (Questions?.length > 0) {
          dispatch(startQuiz());
        }
      }, [Questions, dispatch]);

    return(
        <div className="Test p-5 sm:p-16 md:p-24 gap-5 flex flex-col justify-between h-screen">
            {timePopHandler ? <TimePop /> : null}
            {SubmitPopState ? <SubmitPop /> : null}
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-5">
                    <div className="top-navigators flex items-center">
                        <Link  className="text-sm opacity-50 text-black" to="/Category">Category </Link>
                        <h1 className="text-sm opacity-50 text-primary">/ {category}</h1>
                    </div>
                    <h1 className="text-3xl text-primary">{category}</h1>
                </div>
                <Timer/>
            </div>
     
            {loading ? (
                <Loading />
            ) : Questions.length > 0 ? (
                <Question />
            ) : (
                <Loading />
            )}
            <div className="flex justify-between items-center w-full lg:w-1/2">
                {index != 0 ?
                    <button onClick={()=>{dispatch(prevQuestion())}} className="px-8 py-3 rounded-md bg-primary text-white">Back</button>:
                    <></>
                }
                {index == 9?<button onClick={()=>{selectedValue[index] && dispatch(setSubmitPop(true))}} className={`${selectedValue[index]?"bg-primary":"bg-primary opacity-50"} px-8 py-3 rounded-md bg-primary text-white`}>Submit</button>:
                <button onClick={()=>{selectedValue[index] && dispatch(nextQuestion())
                }} className={`px-8 py-3 rounded-md text-white ${selectedValue[index]?"bg-primary":"bg-primary opacity-50"}`}>Next</button>}
            </div>
        </div>
    )
}

export default Test