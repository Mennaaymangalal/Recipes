import React from 'react'
import logo from '../../assets/logo-BfNap0Pe.png'
export default function Footer() {
  return (
    <>
    <div className="flex flex-col sticky bottom-0">
      <div className="flex justify-between">
        <div className="flex  align-middle justify-center">
          <img src={logo} className='h-8' alt="" />
          <span className='text-2xl font-bold'>Recipe</span>
        </div>
        <div className=''>
        <span className='text-xl font-bold'>Recipe</span>
        </div>        
      </div>

      <div className="bprder border-b-2 p-4"> </div>

      <div className="text-center pt-5 ">
       <span className=' text-footerclr text-sm '>© 2025 Nagy Osama™. All Rights Reserved.</span>
      </div>
      </div>      
    </>
  )
}
