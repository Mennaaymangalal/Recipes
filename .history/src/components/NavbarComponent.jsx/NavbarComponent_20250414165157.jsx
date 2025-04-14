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
            <NavLink to={item == "Meals" ? "/" : "" }
            

"
              }`
            }>
            {item}
            </NavLink>
            
          </div>
        })}
        </div> 
      </div>      
    </>
  )
}

