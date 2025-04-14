import React from 'react'
import  { useEffect, useState } from 'react'
import axios from 'axios'
import ButtonLayout from '../../components/ButtonsLayout/ButtonsLayout'
import Categorie from '../Categorie/Categorie'


export default function Chicken() {
  const [products , setProduct] = useState(null)
  const [isLoading , setIsLoading] = useState(false)
 useEffect(()=>{
  getChickenMeal()
 },[])

 function getChickenMeal(){
  setIsLoading(true)
  axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
  .then((data)=>{
    setProduct(data.data.meals)
     console.log(data.data.meals)
  }).catch((err)=>{
    console.log(err)
  }).finally(()=>{
    setIsLoading(false)
  })
 } 
  return (
    <>
    {
      isLoading 
      ? 
      <h1>Loading...</h1>
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
