import React from "react";

const Card = ({post}) =>{
    return(
        <div className="Card bg-slate-400 p-5 rounded-md flex flex-col gap-5">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p>{post.body}</p>
            {
                post.userId == "123"?
                <div className="flex justify-between">
                    <button className="text-slate-50 font-bold px-3 py-2 rounded-md bg-red-900">Delete</button>
                    <button className="text-slate-50 font-bold px-3 py-2 rounded-md bg-slate-800">Edit</button>
                </div>:<></>
            }
        </div>
    )
}

export default Card