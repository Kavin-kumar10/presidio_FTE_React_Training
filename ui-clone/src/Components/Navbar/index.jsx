import React from "react";
import { bg,Logo } from '../../Assets';
import { FaLocationDot,FaUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";



const Navbar = () =>{
    return(
        <nav className='flex justify-between items-center py-10 font-bold'>
          <ul className='flex items-center gap-5 text-2xl'>
            <li className="mr-10"><img src={Logo} alt="" /></li>
            <li className="text-primary">Home</li>
            <li>Store</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
          <div className="right_nav flex items-center gap-3">
                <div className="flex text-xl font-bold">
                    <FaLocationDot size={45} className="px-3 py-2  border-2 border-slate-800"/>
                    <IoIosSearch size={45} className="px-3 py-2 border-2 border-slate-800"/>
                </div>
                <div className="flex text-xl gap-2 items-center p-2 border-2 border-slate-800">
                    <FaUser/>
                    Account
                </div>
                <div className="flex text-xl gap-2 items-center p-2 border-2 border-slate-800">
                    <IoBagOutline/>
                    Bag
                </div>
                <div className="flex text-xl gap-2 items-center p-2 border-2 border-slate-800">
                    <CiGlobe/>
                    EN
                </div>
          </div>
        </nav>
    )
}

export default Navbar