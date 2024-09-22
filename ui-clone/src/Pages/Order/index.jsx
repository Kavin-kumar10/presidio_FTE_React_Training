import React from "react";
import Cards from "../../Components/Cards";
import { FreshFood,SuperSalads,Vegetables } from "../../Assets";
import { FirstCard,SecondCard,ThirdCard,FourthCard } from "../../Assets";

const Order = () =>{

    const data = [
        {
            Name:"Chips",
            Cost:10,
            image:FirstCard
        },
        {
            Name:"Side Dish",
            Cost:8,
            image:SecondCard
        },
        {
            Name:"Bread",
            Cost:7.5,
            image:ThirdCard
        },
        {
            Name:"Bolthouse",
            Cost:100,
            image:FourthCard
        }
    ]

    return(
        <div className="Order">
            <section className='h-fit py-24 w-screen category flex justify-center gap-5'>
                <img  src={FreshFood} alt="" />
                <img  src={SuperSalads} alt="" />
                <img  src={Vegetables} alt="" />
            </section>
            <section className='flex flex-col justify-center items-center gap-10'>
                <h1 className='font-bold text-5xl'>New Organic Add-ons</h1>
                <ul className='flex gap-3 items-center justify-center text-lg'>
                <li className='px-7 py-2 rounded-md bg-[#3BB77E] text-white'>Breakfast</li>
                <li className='px-7 py-2'>Fruites</li>
                <li className='px-7 py-2'>Salads</li>
                </ul>
                <div className="grid grid-cols-4 gap-10">
                    {
                        data.map((elem)=><Cards elem={elem}/>)
                    }
                     {
                        data.map((elem)=><Cards elem={elem}/>)
                    }
                </div>
            </section>
        </div>
    )
}

export default Order