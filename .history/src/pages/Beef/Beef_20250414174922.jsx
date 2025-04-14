import React from 'react'
import  { useEffect, useState } from 'react'
import axios from 'axios'
import ButtonLayout from '../../components/ButtonsLayout/ButtonsLayout'
import Categorie from '../Categorie/Categorie'
import Loading from '../../components/Loading/Loading'
import UseFetch from '../../Hooks/UseFetch/UseFetch'


export default function Beef() {
  
  const products = UseFetch()

  return (
    <>
    {
      isLoading 
      ? 
      <Loading/>
      :
   <>
    {/* Button Layout */}
    <ButtonLayout/>

    {/* Categories Layout */}
    <div className="mt-16 grid sm:grid-cols-2 px-4  lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-28 justify-center mb-3 ">
      {
        products?.map((product,index)=>{
          return <Categorie key={index} product={product}/>

        })
      }

    </div>
   </>
    }
</>
  )
}
