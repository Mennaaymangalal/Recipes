import axios from "axios"
import { useEffect, useState } from "react"

export default function UseFetch(endpoint){
  const [products , setProduct] = useState(null)
  const [isLoading , setIsLoading] = useState(false)
 useEffect(()=>{
  getMeals()
 },[])

 function getMeals(){
  setIsLoading(true)
  axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + endpoint)
  .then((data)=>{
    setProduct(data.data.meals)
     console.log(data.data.meals)
  }).catch((err)=>{
    console.log(err)
  }).finally(()=>{
    setIsLoading(false)
  })
 } 

 return products , isLoading
}