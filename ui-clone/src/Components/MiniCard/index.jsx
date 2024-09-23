import React from "react";
import { Bread } from "../../Assets";
import { CiStar } from "react-icons/ci";

const MiniCard = () =>{
    return(
        <div className="MiniCard flex gap-5 shadow-md shadow-slate-400 p-3">
            <img className="rounded-md" src={Bread} alt="" />
            <div className="flex flex-col p-5 justify-between">
                <h1 className="text-2xl font-semibold">Bread</h1>
                <ul className="flex gap-1 items-center justify-center text-CardColor">
                    <CiStar size={20}/>
                    <CiStar size={20}/>
                    <CiStar size={20}/>
                    <CiStar size={20}/>
                    <CiStar size={20}/>
                </ul>
                <h1 className="text-xl text-green-800">$ 10</h1>
            </div>
        </div>
    )
}

export default MiniCard