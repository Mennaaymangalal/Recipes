import React from 'react'
import ButtonLayout from '../../components/ButtonsLayout/ButtonsLayout'
import { Outlet } from 'react-router-dom'


export default function Meals() {
 
  return (
    <>
    {
     <>
    {/* Button Layout */}
    <ButtonLayout/>
    <Outlet/>
   </>
    }
</>
  )
}

