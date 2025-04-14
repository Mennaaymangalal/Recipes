import React from 'react';
import {  NavLink } from 'react-router-dom'
import logo from '../../assets/logo-BfNap0Pe.png'

export default function NavbarComponent() {
 
  const menuItems = [
   "Meals",
   "Ingredients", 
   "Area"
  ]
  return (
    <>
    <div className=" text-white sticky  top-10 p-4">
      <img src={logo} alt="" />
      <div className="flex flex-col gap-6  align-middle pt-10">        
        {menuItems.map((item,index)=>{
          return <div key={index} className="">
           <NavLink className={ "bg-orangeHighlight text-white font-semibold shadow-lg px-4 py-2 rounded-md w-full block text-left text-xl  hover:scale-105 transition-all border border-gray-200"}>              
            {item}
            </NavLink>           
            
          </div>
        })}
        </div> 
      </div>      
    </>
  )
}

