import React from "react";
import { useEffect } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setParams } from "../../Redux/QuizSlice";
import Category from "../../Pages/Category";


const CatCard = ({elem}) =>{
    const dispatch = useDispatch();

    return(
        <form className="CatCard bg-white flex flex-col items-start rounded-md p-3 shadow shadow-black gap-3">
            <p className="opacity-50">Test id : {elem.id}</p>
            <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold">{elem.name}</h1>
                <FaCirclePlay onClick={()=>dispatch(setParams({Category:elem.id,Difficulty:"",CategoryName:elem.name}))} size={40} className="text-primary"/>
            </div>
        </form>
    )
}

export default CatCard