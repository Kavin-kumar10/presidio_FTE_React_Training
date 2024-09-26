import React from "react";
import Option from "../Option";
import { useSelector } from "react-redux";

const Question = () =>{
    const CurrentQuestion = useSelector(state => state.Quiz.CurrentQuestion);
    return(
        <div className="Question gap-10 flex flex-col min-h-[40vh]">
            <h1 className="text-3xl font-semibold text-slate-600">{CurrentQuestion.question}</h1>
            <div className="flex flex-col gap-5">
                {
                    CurrentQuestion.allAnswers?.map((elem)=>
                        <Option key={elem} elem={elem}/>
                    )
                }
            </div>
        </div>
    )
}

export default Question