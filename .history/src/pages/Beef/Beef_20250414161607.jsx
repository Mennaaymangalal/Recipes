import React from 'react'
import  { useEffect, useState } from 'react'
import axios from 'axios'
import ButtonLayout from '../../components/ButtonsLayout/ButtonsLayout'
import Categories from '../../components/Categories/Categories'


export default function Beef() {
  const [products , setProduct] = useState(null)
  const [isLoading , setIsLoading] = useState(false)
 useEffect(()=>{
   getAllMeals()
 },[])

 function getBeefMeal(){
  axios
 } 
 const getAllMeals = async () => {
   try {
     setIsLoading(true)
     const mealPromises = Array.from({ length: 30 }, () =>
       axios.get('www.themealdb.com/api/json/v1/1/filter.php?c=beef')
     );
 
     const results = await Promise.all(mealPromises);
     const meals = results.map(res => res.data.meals[0]);
     setProduct(meals);
     setIsLoading(false)
   } catch (err) {
     console.error('Error fetching multiple meals:', err);
   }
 };
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
          return <Categories key={index} product={product}/>

        })
      }

    </div>
   </>
    }
</>
  )
}
