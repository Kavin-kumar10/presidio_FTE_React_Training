import React from "react";
import Navbar from "../../Components/Navbar";
import { bg, employee } from "../../Assets";
import LandpageBox from "../../Components/LandpageBox";

const Landpage = () =>{
    return(
        <div className='h-screen w-screen px-24 ' style={{background:`url(${bg})`,backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <Navbar/>
            <div className="flex items-center justify-center relative">
                <div className="w-1/2 flex gap-10 relative -left-10">
                    <h1 style={{writingMode:"vertical-lr"}} className="opacity-50 text-primary rotate-180 h-fit font-outlinefont text-9xl tracking-widest">Organic</h1>
                    <div className="flex flex-col justify-center gap-5">
                        <h1 className="text-5xl font-bold tracking-normal leading-normal">Live on <br />
                        <span className="text-primary">fruits & vegetables</span>
                        <br /> to live Healthy</h1>
                        <h2 className="underline font-bold text-3xl mb-20">100% Healthy & Fresh</h2>
                        <button className="text-xl px-6 py-4 rounded-full w-fit text-white bg-black">Shop Now</button>
                    </div>
                </div>
                <img className="w-1/2" src={employee} alt="" />
            </div>
            <LandpageBox/>
        </div>
    )
}

export default Landpage