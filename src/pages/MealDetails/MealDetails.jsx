import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function MealDetails() {
  const [isLoading , setIsLoading] = useState()
  const [meal , setMeal] = useState([])
  const {id} = useParams()
 

  useEffect(()=>{
    getMealDetails(id)  
  },[])

  function getMealDetails(id){
    setIsLoading(true)
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
    .then((data)=>{
        console.log(data.data.meals)
        setMeal(data.data.meals)
    }).catch((err)=>{
        console.log(err)
    }).finally(()=>{
        setIsLoading(false)
    })
  } 
  return (
    <>
    {
        isLoading ? <Loading/>
        :
        <div className="text-black p-6">
      {
        meal.map((meal , index)=>(
            <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Left Column: Image + Buttons */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <h1 className="text-5xl font-bold font-serif">{meal.strCategory}</h1>
              <img
                src={meal.strMealThumb}
                alt="Sushi"
                className="rounded-xl w-full max-w-sm object-cover"
              />
              <div className="flex gap-4">
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full"
                >
                  youtube
                </a>
                <a
                  href={meal.strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full"
                >
                  source
                </a>
              </div>
            </div>
    
            {/* Middle Column: Instructions */}
            <div className="text-justify leading-relaxed text-base font-medium pt-4">
              <p>
               {meal.strInstructions}
              </p>
             
            </div>
    
            {/* Right Column: Ingredients */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold font-serif mb-4 border-b pb-2">Ingredients</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>{meal.strIngredient1}:</span>
                  <span>{meal.strMeasure1}</span>
                </li>
                <li className="flex justify-between">
                  <span>{meal.strIngredient2}:</span>
                  <span>{meal.strMeasure2}</span>
                </li>
                <li className="flex justify-between">
                  <span>{meal.strIngredient3}:</span>
                  <span>{meal.strMeasure3}</span>
                </li>
                <li className="flex justify-between">
                  <span>{meal.strIngredient4}:</span>
                  <span>{meal.strMeasure4}</span>
                </li>
                <li className="flex justify-between">
                  <span>{meal.strIngredient5}:</span>
                  <span>{meal.strMeasure5}</span>
                </li>                            
              </ul>
            </div>
          </div>
        ))
      }
      </div>
    }
      
    </>
  )
}
 