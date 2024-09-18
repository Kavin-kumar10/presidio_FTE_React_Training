import React from "react";
import Data from '../Data.json'
import Card from "./Card";

const Three = () =>{
    console.log(Data);
    console.log("hllo")
    return(
        <div className="Three flex flex-col gap-5 h-screen w-screen px-14 py-14 bg-slate-700">
            <h1 className="text-3xl font-semibold text-slate-200">Post Details</h1>
            <div className="px-3 py-1 bg-slate-500 text-slate-100 w-fit rounded-md">Total Posts: {Data.posts.length}</div>
            <div className="grid grid-cols-3 gap-5 overflow-y-scroll">
                {
                    Data?.posts?.map((elem)=><Card post={elem}/>)
                }
            </div>
        </div>
    )
}

export default Three