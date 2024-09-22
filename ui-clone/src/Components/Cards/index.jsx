import React from "react";
import { FirstCard } from "../../Assets";
import { CiStar,CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";




const Cards = ({elem}) =>{
    return(
        <div className="Cards flex flex-col gap-3 shadow p-3 rounded-md">
            <img src={elem.image} alt="" />
            <div className="flex flex-col gap-0">
                <p>Breakfast</p>
                <h1 className="text-3xl">{elem.Name}</h1>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-green-600">${elem.Cost}</p>
                <ul className="flex gap-1 items-center justify-center text-CardColor">
                    <CiStar/>
                    <CiStar/>
                    <CiStar/>
                    <CiStar/>
                    <CiStar/>
                </ul>
            </div>
            <div className="flex justify-between items-center text-lg">
                <button className="text-white bg-CardColor px-3 py-2 rounded-md flex gap-2 items-center justify-center">Add to Card <IoIosArrowRoundForward size={30}/></button>
                <div className="flex gap-2">
                    <button className="text-white bg-CardColor p-3 rounded-md"><CiHeart/></button>
                    <button className="text-white bg-CardColor p-3 rounded-md"><IoEyeOutline/></button>
                </div>
            </div>
        </div>
    )
}

export default Cards