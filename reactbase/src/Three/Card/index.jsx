import React from "react";
import { AiOutlineLike,AiOutlineDislike } from "react-icons/ai";


const Card = ({post}) =>{
    return(
        <div className="Card bg-slate-400 text-slate-900 p-5 rounded-md flex flex-col gap-5">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="opacity-80">{post.body}</p>
        
            <div className="flex gap-5">
                <button className="border border-slate-600 bg-slate-400 rounded flex px-3 py-1 items-center justify-center gap-2"><AiOutlineLike/> {post.reactions.likes}</button>
                <button className="border border-slate-600 bg-slate-400 rounded flex px-3 py-1 items-center justify-center gap-2"><AiOutlineDislike/>{post.reactions.dislikes}</button>
            </div>
            {
                post.userId === 123?
                <div className="flex justify-between">
                    <button className="text-slate-50 font-bold px-3 py-2 rounded-md bg-red-900">Delete</button>
                    <button className="text-slate-50 font-bold px-3 py-2 rounded-md bg-slate-800">Edit</button>
                </div>:<></>
            }
        </div>
    )
}

export default Card