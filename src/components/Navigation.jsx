import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";


export default function Navigation() {
    const [menuStatus,setMenuStatus]=useState(false)
   
  return (
    <div>
        <nav className='mycontainer w-full h-24 bg-[#0a0a0a] border-b border-green-500 shadow  flex flex-row justify-between items-center text-sm md:text-md '>
            <img src="./logo1.png" alt="logo" className='w-38 h-12' />
            <div className=' flex-row  items-center  md:gap-4 lg:gap-12  hidden md:flex'>
            <a href="" className='nav-link '>Features</a>
            <a href="" className='nav-link '>How it Works</a>
            <a href="" className='nav-link '>Tech Stack</a>
            <a href="" className='nav-link '>Integration</a>
            <a href="" className='nav-link '>Pricing</a>
            </div>
            
            <button className='nav-button text-amber-50 font-bold w-32 h-10 rounded-full border border-green-800 transition-all hidden md:flex justify-center items-center whitespace-nowrap  '>Get Started</button>
            
           <div className='text-amber-50 font-bold text-3xl md:hidden' onClick={()=>setMenuStatus(!menuStatus)}>
            <div>{menuStatus? <IoClose />:<IoMdMenu />}</div>
            
           </div>
        </nav>
        {menuStatus&& ( <div className='md:hidden bg-[#0a0a0a] px-6 py-4 space-y-4 text-white flex  flex-col justify-center items-center font-bold '>
                    <a href="#" className="block nav-link">Features</a>
                    <a href="#" className="block nav-link">How it Works</a>
                    <a href="#" className="block nav-link">Integration</a>
                    <a href="#" className="block nav-link">Tech Stack</a>
                    <a href="#" className="block nav-link">Pricing</a>
                    <button className='w-full mt-2 py-2 rounded-full text-white font-semibold nav-button:hover nav-button'>Get Started</button>
                
        </div>
          )}

       
    </div>
  )
}
