import React from 'react'
import  { useEffect, useState } from 'react'
import axios from 'axios'
import ButtonLayout from '../../components/ButtonsLayout/ButtonsLayout'
import Categories from '../../components/Categories/Categories'


export default function Beef() {
  const [products , setProduct] = useState(null)
  const [isLoading , setIsLoading] = useState(false)
 useEffect(()=>{
  getBeefMeal()
 },[])

 function getBeefMeal(){
  // setIsLoading(true)
  axios.get('www.themealdb.com/api/json/v1/1/filter.php?c=beef')
  .then((data)=>{
    // setProduct(data)
     console.log(data)
  }).catch((err)=>{
    console.log(err)
  }).finally(()=>{
    // setIsLoading(false)
  })
 } 
//  const getAllMeals = async () => {
//    try {
//      setIsLoading(true)
//      const mealPromises = Array.from({ length: 30 }, () =>
//        axios.get('www.themealdb.com/api/json/v1/1/filter.php?c=beef')
//      );
 
//      const results = await Promise.all(mealPromises);
//      const meals = results.map(res => res.data.meals[0]);
//      setProduct(meals);
//      setIsLoading(false)
//    } catch (err) {
//      console.error('Error fetching multiple meals:', err);
//    }
//  };
  return (
    <>
   
</>
  )
}
