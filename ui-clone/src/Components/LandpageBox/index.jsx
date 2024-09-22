import React from "react";
import { CartValue,Salads,Groceries,Grocery } from "../../Assets";

const LandpageBox = () =>{
    return(
        <div className="LandpageBox flex rounded items-center justify-between px-10 py-6 shadow-md shadow-slate-600 relative w-full bg-white">
            <img src={Grocery} alt="" />
            <img src={Salads} alt="" />
            <img src={CartValue} alt="" />
            <img src={Groceries} alt="" />
        </div>
    )
}


export default LandpageBox