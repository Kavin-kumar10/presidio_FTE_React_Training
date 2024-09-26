import React from "react";
import { Logo } from "../../Assets";
import { Link } from "react-router-dom";


const Landpage = ()=>{
    return(
        <div className="Landpage h-screen w-screen bg-secondary text-primary flex items-center justify-center flex-col gap-40">
            <img className="h-1/4 md:h-1/3" src={Logo} alt="" />
            <div className="flex flex-col gap-5 items-center justify-center text-center">
                <h1 data-aos="fade-up" className="text-2xl md:text-5xl font-bold">Test your Knowledge here</h1>
                <p data-aos="fade-up" data-aos-duration="500" className="text-slate-600 opacity-50 text-sm md:text-lg w-3/4 md:w-1/2">Engage with friends or take on random opponents in thrilling quiz battles. With each question you answer, you’ll discover new facts and insights, making learning both engaging and competitive.</p>
                <Link to="/Category"><button data-aos="fade-up" data-aos-duration="700" className="text-secondary bg-primary rounded-md px-5 py-3">Take Quiz</button></Link>
            </div>
        </div>
    )
}

export default Landpage