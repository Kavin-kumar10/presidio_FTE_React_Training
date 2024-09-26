import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { calculateScore, chooseOption } from "../../Redux/QuizSlice";
import { useSelector } from "react-redux";

const Option = ({elem}) =>{
    const dispatch = useDispatch();
    const index = useSelector(state => state.Quiz.index);
    const ChoosenOptions = useSelector(state => state.Quiz.ChoosenOptions);
    return(
        <div onClick={()=>dispatch(chooseOption(elem))} className={`${(ChoosenOptions[index] == elem)?"bg-slate-600 text-white":"bg-slate-200 hover:bg-slate-300"} Option rounded-md w-full lg:w-1/2 px-5 py-3 cursor-pointer flex justify-between items-center`}>
            <h1>{elem}</h1>
        </div>
    )
}

export default Option