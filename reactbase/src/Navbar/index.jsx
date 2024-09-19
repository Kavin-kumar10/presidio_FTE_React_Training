import React from "react";
import { Link } from "react-router-dom";


//Navbar based on the date of task assigned
const Navbar = () =>{
    return(
        <div className="Navbar fixed text-slate-50 bg-slate-600 top-0 left-0 w-screen px-14 py-5 flex justify-between items-center">
            <h1 className="text-3xl font-bold">React Training Task</h1>
            <ul className="flex gap-5 ">
                <Link to="Three">18/09/2024</Link>
                <Link to="Five">19/09/2024</Link>
            </ul>
        </div>
    )
}

export default Navbar